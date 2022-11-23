const router = require('express').Router();
const { User, Comment } = require('../../models');


router.get('/', (req, res) => {
  Comment.findAll().then(comments=>{
    const commentsHbsData = comments.map((comment)=>comment.get({plain: true}))
    console.log(comments);
    console.log(commentsHbsData)
    res.render("singlepost", {comments:commentsHbsData, logged_in: req.session.logged_in
    })
  })
})
    
router.post('/', async (req, res) => {
  if(!req.session.logged_in){
    return res.status(401).json({msg:"hey! login first!"})
    }  
  try {
    const newComment = await Comment.create({
      content:req.body.content,
      date_created:req.body.date_created,
      post_id:req.body.post_id,
      user_id:req.session.user_id
    });
    res.status(200).json(newComment);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;