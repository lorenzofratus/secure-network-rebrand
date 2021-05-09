/* 
	Initialization variables
*/
import { service_categories } from './db_init/db_init.js'
import { services } from './db_init/db_init.js'
import { people } from './db_init/db_init.js'
import { areas } from './db_init/db_init.js'

require('dotenv').config()

/*
	Database initialization
*/

const { Sequelize, DataTypes, Model } = require('sequelize')
const db = new Sequelize(process.env.DATABASE_URL, {
	ssl: true,
	dialectOptions: { ssl: { require: true, rejectUnauthorized: false } },
	define: {
		freezeTableName: true,
	},
})
/*
	Utilities functions
*/
async function insertItem(table, item) {
	const object = await table.create(item)
	return object
}

async function insertItems(table, items) {
	let objects = []
	items.forEach((item) => {
		let object = insertItem(table, item)
		objects.push(object)
	})
	return objects
}

function defineDatabaseStructure() {
	class ServiceCategory extends Model {}
	ServiceCategory.init(
		{
			id: {
				type: DataTypes.STRING,
				primaryKey: true,
				allowNull: false,
			},
			name: DataTypes.STRING,
			text: DataTypes.TEXT,
			img: DataTypes.STRING,
			path: DataTypes.STRING,
		},
		{ sequelize: db, modelName: 'service_category' }
	)

	class Service extends Model {}
	Service.init(
		{
			id: {
				type: DataTypes.STRING,
				primaryKey: true,
				allowNull: false,
			},
			name: DataTypes.STRING,
			text: DataTypes.TEXT,
			img: DataTypes.STRING,
			path: DataTypes.STRING,
		},
		{ sequelize: db, modelName: 'service' }
	)

	class Person extends Model {}
	Person.init(
		{
			id: {
				type: DataTypes.STRING,
				primaryKey: true,
				allowNull: false,
			},
			name: DataTypes.STRING,
			surname: DataTypes.STRING,
			text: DataTypes.TEXT,
			img: DataTypes.STRING,
			path: DataTypes.STRING,
			role: DataTypes.ENUM('founder', 'employee', 'manager'),
		},
		{ sequelize: db, modelName: 'person' }
	)

	class Area extends Model {}
	Area.init(
		{
			id: {
				type: DataTypes.STRING,
				primaryKey: true,
				allowNull: false,
			},
			name: DataTypes.STRING,
			text: DataTypes.TEXT,
			img: DataTypes.STRING,
			path: DataTypes.STRING,
		},
		{ sequelize: db, modelName: 'area' }
	)

	ServiceCategory.hasMany(Service, { foreignKey: 'category_id' })
	Area.hasMany(Person, { foreignKey: 'area_id' })
	Area.hasMany(Service, { foreignKey: 'area_id' })
	db._tables = { ServiceCategory, Service, Person, Area }
}

async function insertTables() {
	const { ServiceCategory, Service, Person, Area } = db._tables
	await insertItems(Area, areas)
	await insertItems(ServiceCategory, service_categories)
	await insertItems(Service, services)
	await insertItems(Person, people)
}

async function initializeDatabase() {
	// Some code to initialize the db
	defineDatabaseStructure()
	await db.sync({ force: true })
	await insertTables()
	return db
}
export default initializeDatabase
