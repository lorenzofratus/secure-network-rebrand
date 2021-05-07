import express from 'express'
import initializeDatabase from '../db_conn'

const app = express()
app.use(express.json())

async function init() {
	const db = await initializeDatabase()
	const { ServiceCategory, Service } = db._tables

	app.get('/service-categories', async (req, res) => {
		return res.json(await ServiceCategory.findAll())
	})

	app.get('/services', async (req, res) => {
		return res.json(await Service.findAll())
	})

	app.get('/services-by-category/:category', async (req, res) => {
		let { category } = req.params
		//category = category.replace('-', ' ')
		return res.json(
			await Service.findAll({
				where: { category_id: category },
			})
		)
	})

	app.get('/services-by-id/:id', async (req, res) => {
		const { id } = req.params
		return res.json(await Service.findByPk(id))
	})
}
init()

export default app
