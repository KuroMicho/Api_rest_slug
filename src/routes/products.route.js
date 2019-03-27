const express = require('express')
const router = express.Router()
const db = require('../db.js')
const slug = require('slug-generator')


router.get('/', async (req, res) => {
    // select * from users
    const response = await db.select().from('products')

    res.json(response)
})

router.post('/', async (req, res) => {
    let data = req.body

    data.slug = slug(data.Name)

    let product = await db('products').insert(data)

    res.send('guardado')


})

module.exports = router