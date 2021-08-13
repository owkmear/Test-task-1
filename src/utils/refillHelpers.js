import axios from 'axios'

const getAllProducts = () => {
  return new Promise((resolve, reject) => {
    axios({
      method: 'get',
      timeout: 5000,
      url: 'https://www.mocky.io/v2/5d944b9f2f00006b008ff619'
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
