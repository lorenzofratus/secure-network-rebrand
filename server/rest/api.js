import express from 'express'
import initializeDatabase from '../db_conn'

const app = express()
app.use(express.json())

async function init() {
	const db = await initializeDatabase()
	const { ServiceCategory } = db._tables

	app.get('/service_categories', async (req, res) => {
		const service_categories = await ServiceCategory.findAll()
		return res.json(service_categories)
	})
}

init()

export default app
