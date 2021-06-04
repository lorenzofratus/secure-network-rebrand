/*
 * Copyright (c) 2021
 *
 * @author Lorenzo Fratus
 * @author Simone Orlando
 * @author Cristian C. Spagnuolo
 */

// Initialization variables
import {
	serviceCategories,
	services,
	people,
	areas,
	personService,
	articles,
} from './db_init.js'

// Required to read information from the env also in development mode
require('dotenv').config()

// Database initialization
const { Sequelize, DataTypes, Model } = require('sequelize')
const db = new Sequelize(process.env.DATABASE_URL, {
	ssl: true,
	dialectOptions: { ssl: { require: true, rejectUnauthorized: false } },
	define: {
		freezeTableName: true,
	},
})

// Utilities functions
async function insertItem(table, item) {
	const object = await table.create(item)
	return object
}

function insertItems(table, items) {
	return new Promise((resolve, reject) => {
		const objects = []
		items.forEach((item) => {
			const object = insertItem(table, item)
			objects.push(object)
		})
		resolve(objects)
	})
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

	class Article extends Model {}
	Article.init(
		{
			id: {
				type: DataTypes.STRING,
				primaryKey: true,
				allowNull: false,
			},
			type: DataTypes.ENUM('news', 'research'),
			date: DataTypes.DATEONLY,
			name: DataTypes.STRING,
			text: DataTypes.TEXT,
			path: DataTypes.STRING,
			icon: DataTypes.STRING,
			subtitle: DataTypes.STRING,
		},
		{ sequelize: db, modelName: 'article' }
	)

	const PersonService = db.define(
		'person_service',
		{
			isReference: {
				type: DataTypes.BOOLEAN,
				defaultValue: false,
			},
		},
		{ timestamps: false }
	)

	Service.belongsTo(ServiceCategory, { foreignKey: 'category_id' })

	Area.hasMany(Person, { foreignKey: 'area_id' })
	Person.belongsTo(Area, { foreignKey: 'area_id' })

	Area.hasMany(Service, { foreignKey: 'area_id' })
	Service.belongsTo(Area, { foreignKey: 'area_id' })

	Person.hasMany(PersonService, { foreignKey: 'person_id' })
	PersonService.belongsTo(Person, { foreignKey: 'person_id' })

	Service.hasMany(PersonService, { foreignKey: 'service_id' })
	PersonService.belongsTo(Service, { foreignKey: 'service_id' })

	db._tables = {
		ServiceCategory,
		Service,
		Person,
		Area,
		PersonService,
		Article,
	}
}

async function insertTables(dev) {
	if (dev) {
		const {
			ServiceCategory,
			Service,
			Person,
			Area,
			PersonService,
			Article,
		} = db._tables
		await insertItems(Area, areas)
		await insertItems(ServiceCategory, serviceCategories)
		await insertItems(Service, services)
		await insertItems(Person, people)
		await insertItems(PersonService, personService)
		await insertItems(Article, articles)
	}
}

// Initialization of the database
async function initializeDatabase() {
	// Used to insert data into the database only in production
	const dev = false

	defineDatabaseStructure()
	await db.sync({ force: dev })
	await insertTables(dev)
	return db
}
export default initializeDatabase
