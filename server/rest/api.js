import express from 'express'
import initializeDatabase from '../db_conn'
import { services } from '../db_init/db_init.js'

const app = express()
app.use(express.json())

async function init() {
	const db = await initializeDatabase()
	console.log(db._tables)
	const { Service } = db._tables

	app.get('/services', async (req, res) => {
		const services = await Service.findAll()
		return res.json(services)
	})
}

init()

export default app
