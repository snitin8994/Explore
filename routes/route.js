// import express from 'express'
const express = require('express')
const mail = require('../control/mail')
const { postNewTrip, allTrip, tripsById, updateTrip, joinAdd, invitePeople, joinTrip, getAllMembers, deleteTrip, particularItinearayData, createTodo, updateTodoTask, deleteTask, columnOrderData, countTrip, getUser, itineraryData, getAllTodos } = require('../control/helpers')
const { register } = require('../control/auth')
const router = express.Router()

router.post('/register', register)
router.get('/trip/count', countTrip)
router.get('/itinerary/:id', particularItinearayData)
router.post('/itinerary/edit/:id', itineraryData)
router.get('/trip/all', allTrip)
router.post('/sendMail', mail)
router.post('/trip/new', postNewTrip)
router.put('/trip/updatetrip', updateTrip)
router.get('/trip/:id', tripsById)
router.get('/todo/:id', getAllTodos)
router.delete('/trip/delete/:id', deleteTrip)
router.post('/todo/create/:id', createTodo)
router.post('/todo/edit/:id', updateTodoTask)
router.delete('/todo/delete/:id', deleteTask)
router.post('/todo/dnd/:id', columnOrderData)
router.get('/members/:id', getAllMembers)
router.post('/invite/:id', invitePeople)
router.get('/user', getUser)
router.post('/join/:id', joinTrip)
router.post('/trip/user/add/:id', joinAdd)

module.exports = router
