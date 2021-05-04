/* 
	Initialization variables
*/
import { services } from './db_init/db_init.js'

/*
	Database initialization
*/
const { Sequelize, DataTypes } = require('sequelize')
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
console.log(process.env)
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
