const Api = require('../services/api')

const getDataFromApi = (request, resp) => {
  Api.get('/').then( (response) => {
    resp.status(200).send(response.data);
  }).catch( (error) => {
    resp.status(500).send('api fora do ar - '+error)  
  })
}

module.exports = {
    getDataFromApi
}