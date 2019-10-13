const Project = require('../models/project');
const User = require('../models/user');

exports.getAll = (req , res) => {

    Project.find({} , (err , foundProjects) => {
        if(err){
            return res.json({"error" : "finding all projects"});
        }

        return res.json(foundProjects);
    })
};


exports.getBySlug =  (req , res) => {
   const slug = req.params.slug;
  
   Project.findOne({slug} , (err , foundProject) => {
       if(err){
           return res.json({"error" : "in find by slug"});
       }
       return res.json(foundProject);
   })
};

exports.createProject = async (req , res) => {
    const projectData = req.body ;

    const newProject = new Project(projectData) ;

    await Project.init();
    await Project.create(newProject , (err , createdProject) => {
          if(err){
              return res.json(err);
          }

         return res.json(createdProject);
    })
};


exports.deleteById =  (req , res) => {
    const projectId = req.params.id ;

    Project.findById(projectId , (err , foundProject ) => {
        if(err){
            return res.json({"error" : "in finding/delete Project"});
        }

        foundProject.remove((err) => {
           if(err){
            return res.json({"error" : "in deleting Project"});
           }
        })

        return res.json({"delete" : "success"});
    })

};
