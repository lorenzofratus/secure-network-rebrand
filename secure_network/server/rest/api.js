import express from 'express'
import initializeDatabase from '../db_conn'

const app = express()
app.use(express.json())

async function init() {
	const db = await initializeDatabase()
	const { ServiceCategory, Service, Person, Area, PersonService, Resource } =
		db._tables
	const { Op } = require('sequelize')
	const sequelize = require('sequelize')
	/**
	 * Find all queries
	 */
	app.get('/service-categories', async (req, res) => {
		return res.json(await ServiceCategory.findAll({ order: ['id'] }))
	})

	app.get('/services', async (req, res) => {
		return res.json(await Service.findAll({ order: ['id'] }))
	})

	app.get('/people', async (req, res) => {
		return res.json(await Person.findAll({ order: ['id'] }))
	})

	app.get('/areas', async (req, res) => {
		return res.json(await Area.findAll({ order: ['id'] }))
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

	app.get('/resources/:id', async (req, res) => {
		const { id } = req.params
		return res.json(await Resource.findByPk(id))
	})

	app.get('/resources-by-year/:year', async (req, res) => {
		const { year } = req.params
		const literal_str = 'extract(YEAR FROM date) = ' + year
		const payload = await Resource.findAll({
			where: sequelize.literal(literal_str),
		})
		const resources = []
		payload.forEach((item) => {
			const id_arr = item.dataValues.id.split('-')
			const title = ('0' + id_arr[1]).slice(-2) + ' ' + id_arr[0]
			item.dataValues.title = title
			resources.push(item.dataValues)
		})
		return res.json(resources)
	})
	/**
	 * Specific queries
	 */

	app.get('/services-by-category/:category', async (req, res) => {
		const { category } = req.params
		return res.json(
			await Service.findAll({
				where: { category_id: category },
				order: ['id'],
			})
		)
	})

	app.get('/services-by-area/:area', async (req, res) => {
		const { area } = req.params
		return res.json(
			await Service.findAll({
				where: { area_id: area },
				order: ['id'],
			})
		)
	})

	app.get('/people-by-area/:area', async (req, res) => {
		const { area } = req.params
		return res.json(
			await Person.findAll({ where: { area_id: area }, order: ['id'] })
		)
	})

	app.get('/people-by-role/:role', async (req, res) => {
		const { role } = req.params
		return res.json(
			await Person.findAll({ where: { role: role }, order: ['id'] })
		)
	})

	app.get('/people-by-area-and-role/:area/:role', async (req, res) => {
		const { area, role } = req.params
		return res.json(
			await Person.findAll({
				where: {
					area_id: area,
					role: role,
				},
				order: ['id'],
			})
		)
	})

	app.get('/team', async (req, res) => {
		return res.json(
			await Person.findAll({
				where: { [Op.not]: { role: 'founder' } },
				order: ['id'],
			})
		)
	})

	app.get('/last-news/:n', async (req, res) => {
		const { n } = req.params
		const payload = await Resource.findAll({
			limit: n,
			where: { type: 'news' },
			order: [['date', 'DESC']],
		})
		const resources = []
		let date
		payload.forEach((item) => {
			const id_arr = item.dataValues.id.split('-')
			date = new Date(item.dataValues.date)
			item.dataValues.title =
				('0' + date.getDate()).slice(-2) +
				' ' +
				date.toLocaleString('EN', { month: 'long' }) +
				' ' +
				date.getFullYear()
			resources.push(item.dataValues)
		})
		return res.json(resources)
	})

	/**
	 * Joined queries
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
				order: ['id'],
			})
		)
	})

	app.get('/people-by-service/:service/:isReference', async (req, res) => {
		const { service, isReference } = req.params

		const payload = await PersonService.findAll({
			where: {
				service_id: service,
				isReference: isReference,
			},
			order: ['person_id'],
			include: [Person],
		})
		const people = []
		payload.forEach((item) => {
			people.push(item.dataValues.person)
		})

		return res.json(people)
	})

	app.get('/services-by-person/:person', async (req, res) => {
		const { person } = req.params

		const payload = await PersonService.findAll({
			where: {
				person_id: person,
			},
			order: ['service_id'],
			include: [Service],
		})
		const services = []
		payload.forEach((item) => {
			services.push(item.dataValues.service)
		})

		return res.json(services)
	})

	/**
	 * Aggregate queries
	 */

	app.get('/resources-aggregation/', async (req, res) => {
		const payload = await Resource.findAll({
			attributes: [
				[sequelize.literal('extract(YEAR FROM date)'), 'year'],
				'type',
				[sequelize.fn('COUNT', sequelize.col('*')), 'count'],
			],
			group: ['year', 'resource.type'],
		})

		const r = {}
		let year, type, count
		payload.forEach((item) => {
			year = item.dataValues.year
			type = item.dataValues.type
			count = item.dataValues.count
			if (r[year] == null) {
				r[year] = { year: +year }
			}
			r[year][type] = +count
		})
		const resources = []
		for (const prop in r) {
			if (r[prop].news == null) {
				r[prop].news = 0
			}
			if (r[prop].research == null) {
				r[prop].research = 0
			}
			r[prop].path = '/resources/' + r[prop].year
			resources.unshift(r[prop])
		}
		return res.json(resources)
	})

	/**
	 * Utility queries
	 */
	app.get('/people_ids/:area', async (req, res) => {
		const { area } = req.params
		return res.json(
			await Person.findAll({
				attributes: [['id', 'person_id']],
				where: { area_id: area, [Op.not]: { role: 'founder' } },
				order: ['person_id'],
			})
		)
	})

	app.get('/service_ids/:area', async (req, res) => {
		const { area } = req.params
		return res.json(
			await Service.findAll({
				attributes: [['id', 'service_id']],
				where: { area_id: area },
				order: ['id'],
			})
		)
	})
}
init()

export default app
