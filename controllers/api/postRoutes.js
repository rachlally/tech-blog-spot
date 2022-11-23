const router = require('express').Router();
const { User, Post, Comment } = require('../../models');


//create new post
router.post('/', async (req, res) => {
  if(!req.session.logged_in){
    return res.status(401).json({msg:"hey! login first!"})
    }  
  try {
    const newPost = await Post.create({
      title:req.body.title,
      content:req.body.content,
      date_created:req.body.date_created,
      user_id: req.session.user_id,
    });
    res.status(200).json(newPost);
  } catch (err){
    res.status(400).json(err);
  }
});

//update post
router.put('/:id', async (req, res) => {
  if(!req.session.logged_in){
    return res.status(401).json({msg:"hey! login first!"})
  }
  try {
    console.log(req.body);
    const editRows = await Post.update({
      title:req.body.title,
      content:req.body.content,
     }, {
      where: {
        id: req.params.id,
      },
    }
  );
  if (editRows) {
    res.status(200).end();
  } else {
    res.status(400).end();
  } 
} catch (err) {
    res.status(500).json(err);
}
});

//delete post
router.delete('/:id', async (req, res) => {
    if(!req.session.logged_in){
      return res.status(401).json({msg:"hey! login first!"})
    }
    try {
      const postData = await Post.destroy({
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        },
      });
  
      if (!postData) {
        res.status(404).json({ message: 'No post found with this id!' });
        return;
      }
  
      res.status(200).json(postData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  module.exports = router;