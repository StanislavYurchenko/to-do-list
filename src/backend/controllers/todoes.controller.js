const todoesModel = require('../model/todoes')
const { createResponse } = require('../utils/createResponse')
const { HTTP_CODE } = require('../utils/constants')

const getTodoes = async (req, res) => {
  const userId = req.user._id
  const { data, error } = await todoesModel.listTodoes(userId, req.query)
  const code = data ? HTTP_CODE.OK : HTTP_CODE.BAD_CONTENT

  return createResponse(res, data, error, code)
}

const getTodoById = async (req, res) => {
  const userId = req.user._id
  const { id } = req.params
  const { data, error } = await todoesModel.getTodoById(id, userId)
  const code = data ? HTTP_CODE.OK : HTTP_CODE.BAD_CONTENT

  return createResponse(res, data, error, code)
}

const postTodo = async (req, res) => {
  const userId = req.user._id
  const { body } = req
  const { data, error } = await todoesModel.addTodo(body, userId)
  const code = data ? HTTP_CODE.CREATED : HTTP_CODE.BAD_CONTENT
  
  return createResponse(res, data, error, code)
}

const deleteTodoById = async (req, res) => {
  const userId = req.user._id
  const { id } = req.params
  const { data, error } = await todoesModel.removeTodo(id, userId)
  const code = data ? HTTP_CODE.OK : HTTP_CODE.BAD_CONTENT

  return createResponse(res, data, error, code)
}

const patchTodoById = async (req, res) => {
  const userId = req.user._id
  const { id } = req.params
  const { body } = req
  const { data, error } = await todoesModel.updateTodo(id, body, userId)
  const code = data ? HTTP_CODE.OK : HTTP_CODE.BAD_CONTENT

  return createResponse(res, data, error, code)
}



module.exports = {
  getTodoes,
  getTodoById,
  postTodo,
  patchTodoById,
  deleteTodoById,
}


