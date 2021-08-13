const express = require('express')
const app = express()

const PORT = '4500'

app.use(express.json())
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS')
  next()
})

app.post('/api/v1/products', function (req, res) {
  res.type('json')
  res.header('Content-Type', 'text/html; charset=utf-8')

  const data = [
    {
      id: 1,
      title: 'Item 1',
      image: '/50x50.png',
      quantity: 120,
      price: 500,
      category: {
        id: 1,
        title: 'Category 1'
      }
    },
    {
      id: 2,
      title: 'Item 2',
      image: '/50x50.png',
      quantity: 0,
      price: 7600,
      category: {
        id: 2,
        title: 'Category 2'
      }
    },
    {
      id: 3,
      title: 'Item 3',
      image: '/50x50.png',
      quantity: 14,
      price: 3200,
      category: {
        id: 1,
        title: 'Category 1'
      }
    },
    {
      id: 4,
      title: 'Item 4',
      image: '/50x50.png',
      quantity: 0,
      price: 700,
      category: {
        id: 3,
        title: 'Category 3'
      }
    },
    {
      id: 5,
      title: 'Item 5',
      image: '/50x50.png',
      quantity: 40,
      price: 1900,
      category: {
        id: 4,
        title: 'Category 4'
      }
    },
    {
      id: 6,
      title: 'Item 6',
      image: '/50x50.png',
      quantity: 22,
      price: 9999,
      category: {
        id: 4,
        title: 'Category 4'
      }
    },
    {
      id: 7,
      title: 'Item 7',
      image: '/50x50.png',
      quantity: 0,
      price: 0,
      category: {}
    }
  ]

  const answer = {
    data: data
  }
  res.send(answer)
})

app.listen(PORT, () => {
  console.log(`Server start on port ${PORT}`)
})
