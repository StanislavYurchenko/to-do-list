const express = require('express')
const controller = require('../../controllers/todoes.controller')
const validate = require('../../utils/validation')

const guard = require('../../utils/guard')

const router = express.Router()

router.get('/', guard, validate.getTodoesQuery, controller.getTodoes)
router.get('/:id', guard, validate.id, controller.getTodoById)
router.post('/', guard, validate.addTodo, controller.postTodo)
router.patch('/:id', guard, validate.id, validate.updateTodo, controller.patchTodoById)
router.delete('/:id', guard, validate.id, controller.deleteTodoById)

module.exports = router
