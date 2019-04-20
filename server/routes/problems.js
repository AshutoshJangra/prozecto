const express = require('express') ;
const router = express.Router() ;

const Problem = require('../models/problem');

router.get('' , (req , res) => {
    Problem.find({} , (err , foundProblems) => {
        if(err){
            return res.json({"error" : "finding all problems"})
        }

        return res.json(foundProblems);
    })
})

router.get('/:id' , (req , res) => {
   const problemId = req.params.id;
  
   Problem.findById(problemId , (err , foundProblem) => {
       if(err){
           return res.json({"error" : "in find by id"});
       }
       return res.json(foundProblem);
   })

})

router.post('/new' , (req , res) => {
    const problemData = req.body ;

    const problem = new Problem(problemData) ;

    Problem.create(problem , (err , newProblem) => {
          if(err){
              return res.json({"error" : "creating problem"})
          }

         return res.json(newProblem);
    })
})

router.delete('/:id' , (req , res) => {
    const problemId = req.params.id ;

    Problem.findById(problemId , (err , foundProblem) => {
        if(err){
            return res.json({"error" : "in finding/delete problem"});
        }

        foundProblem.remove((err) => {
           if(err){
            return res.json({"error" : "in deleting problem"});
           }
        })

        return res.json({"delete" : "success"});
    })

})
module.exports = router ;


