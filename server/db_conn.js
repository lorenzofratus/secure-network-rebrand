/* 
	Initialization variables
*/
import { service_categories } from './db_init/db_init.js'
import { services } from './db_init/db_init.js'

/*
	Database initialization
*/
const { Sequelize, DataTypes, Model } = require('sequelize')
const db = new Sequelize(
	// process.env.DATABASE_URL
	'postgres://psphttksubmcsp:c4ff8594adf94f8f29b16c92666692771c08986914abb899a0c8c7ca24e1c918@ec2-34-247-151-118.eu-west-1.compute.amazonaws.com:5432/d6fpg6o9bbe9rj',
	{
		ssl: true,
		dialectOptions: { ssl: { require: true, rejectUnauthorized: false } },
		define: {
			freezeTableName: true,
		},
	}
)
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
			title: {
				type: DataTypes.STRING,
				primaryKey: true,
			},
			text: DataTypes.TEXT,
			icon: DataTypes.STRING,
			path: DataTypes.STRING,
		},
		{ sequelize: db, modelName: 'service_category' }
	)

	class Service extends Model {}
	Service.init(
		{
			title: DataTypes.STRING,
			text: DataTypes.TEXT,
			img: DataTypes.STRING,
			path: DataTypes.STRING,
		},
		{ sequelize: db, modelName: 'service_' }
	)
	ServiceCategory.hasMany(Service, { foreignKey: 'category' })
	db._tables = { ServiceCategory, Service }
}

async function insertTables() {
	const { ServiceCategory, Service } = db._tables
	await insertItems(ServiceCategory, service_categories)
	await insertItems(Service, services)
}

async function initializeDatabase() {
	// Some code to initialize the db
	defineDatabaseStructure()
	await db.sync({ force: true })
	await insertTables()
	return db
}
export default initializeDatabase
