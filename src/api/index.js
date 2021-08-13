import axios from 'axios'

const getAllProducts = () => {
  return new Promise((resolve, reject) => {
    axios({
      method: 'post',
      timeout: 5000,
      url: 'http://localhost:4500/api/v1/products'
    })
      .then((response) => {
        resolve(response.data)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

export { getAllProducts }
