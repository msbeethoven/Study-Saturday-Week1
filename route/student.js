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
    //insert a new person in database 
    // res.send(student)

    const newStudent = req.body;
    //req.body is the client-side submission form w/ just their info
    students.push(newStudent)
    res.send(student)
  })

  router.put('/:id', (req, res, next) => {
    const updatedStudent = req.body
    const updatedStudent = students. find(student => student.id === req.param.id)
    res.send(students);

  })
  //updating existing data 

  router.delete('/:id', (req, res, next) => {
    let deletedStudentId = +req.params.id;
    students.filter(student => student.id != deletedStudentId);
    res.send(students);
  })

  module.exports = router;