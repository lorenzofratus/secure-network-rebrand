import express from 'express'
import initializeDatabase from '../db-conn'
const app = express()

app.use(express.json())

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
init()
export default app
