import express from 'express'
import initializeDatabase from '../db_conn'

const app = express()
app.use(express.json())

async function init() {
	const db = await initializeDatabase()
	const { Service } = db._tables

	app.get('/services', async (req, res) => {
		const services = await Service.findAll()
		return res.json(services)
	})
}

init()

export default app
