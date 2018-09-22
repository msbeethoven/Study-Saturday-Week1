const app = require('express');
const router = app.Router();

let student = [
  {id: 1, 
  name: 'Dan'},
  {id: 2, 
  name: 'Karen'},
  {id: 3,
  name: 'Amy'},
  {id: 4,
  name: 'Michelle'},
  {id: 5,
  name: 'Jenn'}]

  router.get('/', (req, res, next) => {
    res.send(student)
    //get requests, no body 
  })

  router.get('/:id', (req, res, next) => {
    //res.send(student[id-1]) 
    console.log("hello there", req)
    //console.log("params", params)
    
    res.send(student[req.params.id-1])
    //params is on the request object 
    //req is always object 
    
  })

  router.post('/', (req, res, next) => {
    res.send('something')
    req.body()
  })

  router.put('/:id', (req, res, next) => {
    res.send('PUT request to homepage')

  })
  //not exactly sure what .put method does 

  router.delete('/:id', (req, res, next) => {
    req.body(student[id-1])
  })

  module.exports = router;