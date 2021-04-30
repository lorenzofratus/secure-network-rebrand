import express from 'express'
import initializeDatabase from '../db-conn'
const app = express()

app.use(express.json())

const services = [
	{
		title: 'Application Security',
		text:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam praesentium facere aliquid beatae magnam est.',
		icon: 'smartphone',
		button: {
			class: 'secondary',
			text: 'See More',
			path: '/',
		},
	},
	{
		title: 'Network Security',
		text:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam praesentium facere aliquid beatae magnam est.',
		icon: 'wifi',
		button: {
			class: 'secondary',
			text: 'See More',
			path: '/',
		},
	},
	{
		title: 'Code Review',
		text:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam praesentium facere aliquid beatae magnam est.',
		icon: 'code',
		button: {
			class: 'secondary',
			text: 'See More',
			path: '/',
		},
	},
	{
		title: 'Automotive Security',
		text:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam praesentium facere aliquid beatae magnam est.',
		icon: 'precision_manufacturing',
		button: {
			class: 'secondary',
			text: 'See More',
			path: '/',
		},
	},
]

async function init() {
	// Code to initialize the server
}

// fake server endpoint definition reachable at localhost:3000/api/dummy
app.get('/test', (req, res) => {
	res.json({
		dummy_object: {
			name: 'Dummy Name',
			payload: 'Dummy Payload',
		},
	})
})

app.get('/items/services', (req, res) => {
	res.json({
		data: services,
	})
})
init()
export default app
