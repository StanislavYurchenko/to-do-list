const express = require('express')
const controller = require('../../controllers/todoes.controller')
const validate = require('../../utils/validation')

const guard = require('../../utils/guard')

const router = express.Router()

router.get('/', controller.getTodoes)
router.get('/:id', controller.getTodoById)
router.post('/', controller.postTodo)
router.patch('/:id', controller.patchTodoById)
router.delete('/:id', controller.deleteTodoById)

module.exports = router
