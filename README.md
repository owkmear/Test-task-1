# Test task

Written using `React`,`Redux-thunk`, `Express`.

### Task

Necessary:
1. Get a list of products from data
2. Display them as cards: picture, category, name and price
3. Make filters for products. Filters must be combined with each other. Filters list:
   * Price - Radio Group with fields 'more than 5000' and 'less than 5000'
   * Category - Select with fields '1', '2', '3', '4'
   * Only products in stock - Checkbox
4. Remove card when user clicked on it

<details>
  <summary>Products data</summary>

```javascript
[
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
```

</details>

## Requirements

You will need the following things properly installed on your computer:

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [create-react-app](https://facebook.github.io/create-react-app/)

## Installation

* `git clone <repository-url>`
* `cd Test-task`
* `npm install`

## Development

`npm run start-server` command start `Express` server at [http://localhost:4500](http://localhost:4500).

`npm run start` command start `dev-server` at [http://localhost:3000](http://localhost:3000) with hot reloading.

### Building

`npm run build` command creates build in `\build` folder.