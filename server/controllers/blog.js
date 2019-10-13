const Blog = require('../models/blog');

exports.getAll = (req , res) => {

    Blog.find({} , (err , foundBlogs) => {
        if(err){
            return res.json({"error" : "finding all projects"})
        }

        return res.json(foundBlogs);
    })
};


exports.getBySlug =  (req , res) => {
   const slug = req.params.slug;
  
   Blog.findOne({slug} , (err , foundBlog) => {
       if(err){
           return res.json({"error" : "in find by slug"});
       }
       return res.json(foundBlog);
   })
};

exports.createBlog = async (req , res) => {
    const BlogData = req.body ;

    const newBlog = new Blog(BlogData) ;

    await Blog.init();
    await Blog.create(newBlog , (err , createdProject) => {
          if(err){
              return res.json(err);
          }

         return res.json(createdBlog);
    })
};


exports.deleteBySlug =  (req , res) => {
    const Slug = req.params.slug ;

    Blog.findOne({Slug} , (err , foundBlog ) => {
        if(err){
            return res.json({"error" : "in finding/delete Blog"});
        }

        foundBlog.remove((err) => {
           if(err){
            return res.json({"error" : "in deleting Blog"});
           }
        })

        return res.json({"delete" : "success"});
    })

};

exports.updateBySlug =  (req , res) => {
    const Slug = req.params.slug ;

    Blog.findOne({Slug} , (err , foundBlog ) => {
        if(err){
            return res.json({"error" : "in finding/delete Blog"});
        }

        return res.json({"Update" : "success"});
    })

};

