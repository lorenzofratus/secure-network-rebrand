/*
 * Copyright (c) 2021
 *
 * Api server used to retrieve information from the database.
 * It implements a series of http endpoints, each of them perform
 * a given query on the database
 *
 * @author Lorenzo Fratus
 * @author Simone Orlando
 * @author Cristian C. Spagnuolo
 */
import express from 'express'
import initializeDatabase from '../db/db_conn'

const app = express()
app.use(express.json())

async function init() {
	const db = await initializeDatabase()
	const { ServiceCategory, Service, Person, Area, PersonService, Article } =
		db._tables
	const { Op } = require('sequelize')
	const sequelize = require('sequelize')

	// Find all queries
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

	// Find by id queries
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

	app.get('/articles/:id', async (req, res) => {
		const { id } = req.params
		return res.json(await Article.findByPk(id))
	})

	app.get('/services-by-area/:area', async (req, res) => {
		const { area } = req.params
		const cat_ids = await Service.findAll({
			where: { area_id: area },
			order: ['category_id', 'id'],
		})

		cat_ids.forEach((item) => {
			item.dataValues.tag = item.dataValues.category_id.replace(/-/g, ' ')
		})

		return res.json(cat_ids)
	})

	app.get('/articles-by-year/:year', async (req, res) => {
		const { year } = req.params
		const literal_str = 'extract(YEAR FROM date) = ' + year
		const payload = await Article.findAll({
			where: sequelize.literal(literal_str),
		})
		const articles = []
		payload.forEach((item) => {
			const id_arr = item.dataValues.id.split('-')
			const title = ('0' + id_arr[1]).slice(-2) + ' ' + id_arr[0]
			item.dataValues.title = title
			articles.push(item.dataValues)
		})
		return res.json(articles)
	})

	// Specific queries
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
		const payload = await Article.findAll({
			limit: n,
			where: { type: 'news' },
			order: [['date', 'DESC']],
		})
		const articles = []
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
			articles.push(item.dataValues)
		})
		return res.json(articles)
	})

	// Joined queries
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
			order: [['isReference', 'DESC'], 'service_id'],
			include: [Service],
		})
		const services = []
		payload.forEach((item) => {
			item.dataValues.service.dataValues.isReference =
				item.dataValues.isReference
			services.push(item.dataValues.service)
		})

		return res.json(services)
	})

	// Aggregate queries
	app.get('/articles-aggregation/', async (req, res) => {
		const payload = await Article.findAll({
			attributes: [
				[sequelize.literal('extract(YEAR FROM date)'), 'year'],
				'type',
				[sequelize.fn('COUNT', sequelize.col('*')), 'count'],
			],
			group: ['year', 'article.type'],
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
		const articles = []
		for (const prop in r) {
			if (r[prop].news == null) {
				r[prop].news = 0
			}
			if (r[prop].research == null) {
				r[prop].research = 0
			}
			r[prop].path = '/articles/' + r[prop].year
			articles.unshift(r[prop])
		}
		return res.json(articles)
	})
}

// Initialization of the api server
init()

export default app
