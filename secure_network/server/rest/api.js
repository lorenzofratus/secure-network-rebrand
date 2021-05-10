import express from 'express'
import initializeDatabase from '../db_conn'

const app = express()
app.use(express.json())
const { Op } = require('sequelize')

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
		const { category } = req.params
		return res.json(
			await Service.findAll({
				where: { category_id: category },
			})
		)
	})

	app.get('/services-by-area/:area', async (req, res) => {
		const { area } = req.params
		return res.json(
			await Service.findAll({
				where: { area_id: area },
			})
		)
	})

	app.get('/people-by-area/:area', async (req, res) => {
		const { area } = req.params
		return res.json(await Person.findAll({ where: { area_id: area } }))
	})

	app.get('/people-by-role/:role', async (req, res) => {
		const { role } = req.params
		return res.json(await Person.findAll({ where: { role: role } }))
	})

	app.get('/people-by-area-and-role/:area/:role', async (req, res) => {
		const { area, role } = req.params
		return res.json(
			await Person.findAll({
				where: {
					area_id: area,
					role: role,
				},
			})
		)
	})

	app.get('/team', async (req, res) => {
		return res.json(
			await Person.findAll({ where: { [Op.not]: { role: 'founder' } } })
		)
	})

	/**
	 * Nested queries
	 */

	app.get('/service-categories-by-area/:area', async (req, res) => {
		const { area } = req.params

		// Retrieving category ids list
		const cat_ids = await Service.findAll({
			attributes: ['category_id'],
			where: { area_id: area },
		})
		const category_ids = []
		let cat_id
		cat_ids.forEach((item) => {
			cat_id = item.dataValues.category_id
			if (category_ids.indexOf(cat_id) === -1) {
				category_ids.push(cat_id)
			}
		})

		// Actual query
		return res.json(
			await ServiceCategory.findAll({
				where: {
					id: {
						[Op.in]: category_ids,
					},
				},
			})
		)
	})
}
init()

export default app
