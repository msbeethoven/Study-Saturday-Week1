const app = require('express');
const router = app.Router();


let test = [
{id: 0, 
  subject: 'English',
  score: 78,
  studentId: 0},
{id: 1, 
  subject: 'Math',
  score: 84,
  studentId: 1},
{id: 2, 
  subject: 'CompSci',
  score: 79,
  studentId: 2},
{id: 3, 
  subject: 'SocialStudies',
  score: 91,
  studentId: 3},
{id: 4, 
  subject: 'Chemistry',
  score: 90,
  studentId: 4},
{id: 5, 
  subject: 'Journalism',
  score: 80,
  studentId: 5}
]

router.get('/', (req, res, next) => {
  res.send(test)
})

router.get('/:id', (req, res, next) => {
  let idNumber = req.params.id
  let testScore = test.filter(person => person.id === + idNumber)
  res.send({ testScore })

})

//filter {"testScore":[{"id":3,"subject":"SocialStudies","score":91,"studentId":3}]}
//find {"testScore":{"id":3,"subject":"SocialStudies","score":91,"studentId":3}}

router.post('/', (req, res, next) => {
  let newId = test.length + 1;
  let testScore = {
    id: newId,
    subject: req.body.subject,
    score: req.body.score,
    studentId: req.body.studentId
  }
  console.log('reqbody', req.body.subject)
  test.push(testScore);
  res.send(testScore)
})

router.delete('/:id', function(req, res, next) {
  let newScores = tests.filter(score => score.id != req.params.id);
  tests = newScores;
  res.json({ tests });
});


router.put('/:id', (req, res, next) => {
  test.map(test => {
    if (test.id === +req.params.id){
      test.score = req.body.score;
      test.studentId = req.body.studentId;
      test.subject = req.body.subject;
    }
  });
  res.send(tests)
})


module.exports = router; 

//git checkout solution 