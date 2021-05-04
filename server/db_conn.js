/* 
	Initialization variables
*/
import { services } from './db_init/db_init.js'

/*
	Database initialization
*/
// const { Sequelize, DataTypes } = require('sequelize')
// const db = new Sequelize(
// 	'postgres://postgres:123456@localhost:5432/secure-network'
// )

const pg = require('pg')
pg.defaults.ssl = true
const db = new Sequelize(process.env.DATABASE_URL, {
	ssl: true,
	dialectOptions: { ssl: { require: true, rejectUnauthorized: false } },
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
	const Service = db.define(
		'Service',
		{
			title: DataTypes.STRING,
			text: DataTypes.TEXT,
			icon: DataTypes.STRING,
			path: DataTypes.STRING,
		},
		{
			underscored: true,
		}
	)
	db._tables = { Service }
}

async function insertTables() {
	const { Service } = db._tables
	await insertItems(Service, services)
	// Add other tables to be inserted
}

async function initializeDatabase() {
	// Some code to initialize the db
	defineDatabaseStructure()
	await db.sync({ force: true })
	await insertTables()
	return db
}
export default initializeDatabase
