const Todo = require('./schemas/Todo')

const listTodoes = async (userId, query) => {
  const { sortBy, sortByDesc, select, limit = 5, page = 1 } = query
  try {
    const { docs: contacts, totalDocs: total, limit: newLimit, page: newPage } =
      await Todo.paginate(
          {
            owner: userId,
          },
          {
            limit,
            page,
            sort: {
              ...(sortBy ? { [`${sortBy}`]: 1 } : {}),
              ...(sortByDesc ? { [`${sortByDesc}`]: -1 } : {}),
            },
            select: select ? select.split('|').join(' ') : '',
            populate: {
              path: 'owner',
              select: 'email -_id',
            }
          })

    return { data: { contacts, total, limit: newLimit, page: newPage } }
  } catch (error) {
    return { error }
  }
}

const getTodoById = async (contactId, userId) => {
  try {
    return {
      data: await Todo.findOne({ _id: contactId, owner: userId }).populate({
        path: 'owner',
        select: 'email -_id',
      })
    }
  } catch (error) {
    return { error }
  }
}

const addTodo = async (body, userId) => {
  try {
    return {
      data: await Todo.create({ ...body, owner: userId })
    }
  } catch (error) {
    return { error }
  }
}

const removeTodo = async (contactId, userId) => {
  try {
    return {
      data: await Todo.findOneAndDelete({ _id: contactId, owner: userId })
    }
  } catch (error) {
    return { error }
  }
}

const updateTodo = async (contactId, body, userId) => {
  try {
    return {
      data: await Todo.findOneAndUpdate({ _id: contactId, owner: userId }, body, { new: true })
    }
  } catch (error) {
    return { error }
  }
}

module.exports = {
  listTodoes,
  getTodoById,
  addTodo,
  removeTodo,
  updateTodo,
}
