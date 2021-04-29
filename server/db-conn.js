// const { Sequelize, DataTypes } = require('sequelize')
const { Sequelize } = require('sequelize')

// Development
// const db = new Sequelize(
// 	'postgres://postgres:prova123@localhost:5432/test-database'
// )
// Production
const pg = require('pg')
pg.defaults.ssl = true
const db = new Sequelize(process.env.DATABASE_URL, {
	ssl: true,
	dialectOptions: { ssl: { require: true, rejectUnauthorized: false } },
})

async function initializeDatabase() {
	// Some code to initialize the db
	await db.sync({ force: true })
	return db
}

export default initializeDatabase
