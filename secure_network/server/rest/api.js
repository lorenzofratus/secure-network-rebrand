import express from 'express'
import initializeDatabase from '../db_conn'

const app = express()
app.use(express.json())

async function init() {
	const db = await initializeDatabase()
	const { ServiceCategory, Service, Person, Area } = db._tables

	/**
	 * Find all queries
	 */
	app.get('/service-categories', async (req, res) => {
		return res.json(await ServiceCategory.findAll())
	})

	app.get('/services', async (req, res) => {
		return res.json(await Service.findAll())
	})

	app.get('/people', async (req, res) => {
		return res.json(await Person.findAll())
	})

	app.get('/areas', async (req, res) => {
		return res.json(await Area.findAll())
	})

	/**
	 * Find by id queries
	 */

	app.get('/services/:service', async (req, res) => {
		const { service } = req.params
		return res.json(await Service.findByPk(service))
	})

	app.get('/service-category/:category', async (req, res) => {
		const { category } = req.params
		return res.json(await ServiceCategory.findByPk(category))
	})

	app.get('/people/:person', async (req, res) => {
		const { person } = req.params
		return res.json(await Person.findByPk(person))
	})

	app.get('/areas/:area', async (req, res) => {
		const { area } = req.params
		return res.json(await Area.findByPk(area))
	})

	/**
	 * Specific queries
	 */

	app.get('/services-by-category/:category', async (req, res) => {
		let { category } = req.params
		return res.json(
			await Service.findAll({
				where: { category_id: category },
			})
		)
	})

	app.get('/people-founders', async (req, res) => {
		return res.json(await Person.findAll({ where: { role: 'founder' } }))
	})

	app.get('/people-managers', async (req, res) => {
		return res.json(await Person.findAll({ where: { role: 'manager' } }))
	})

	app.get('/people-employees', async (req, res) => {
		return res.json(await Person.findAll({ where: { role: 'employee' } }))
	})
}
init()

export default app
