import express = require('express')
import moment = require('moment')
import path = require('path')
const app = express()

console.log(path.resolve('__dirname', '..'))

app.use(express.static(path.resolve(__dirname, '..')))

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', './index.html'))
})

app.get('/api/tasks', (req, res) => {
  const lists: List[] = [
    { id: '8', name: 'chores', userId: '1' },
    { id: '9', name: 'movies', userId: '1' }
  ]
  const tasks: Task[] = [
    {
      id: '1',
      title: 'do laundry',
      createdDate: new Date().toISOString(),
      list: lists[1],
      tags: [{ name: 'things' }]
    },
    {
      id: '2',
      title: 'clean house',
      createdDate: new Date().toISOString(),
      list: lists[0],
      dependents: ['3']
    },
    {
      id: '3',
      title: 'take out trash',
      createdDate: new Date().toISOString(),
      startDate: moment(new Date())
        .add(3, 'days')
        .toISOString(),
      dueDate: moment(new Date())
        .add(5, 'days')
        .toISOString(),
      list: lists[0],
      order: 0
    }
  ]
  res.json(tasks)
})

const port = process.env.PORT || 1337
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
