const router = require('express').Router();
const { User, Comment } = require('../../models');


router.get('/', async (req, res) => {
  try {
    const commentData = await Comment.findAll({
      include: User,
    });
    const comments = commentData.map((comment)=> comment.get({plain: true}));
    console.log(comments);
    res.render('single-post', {comments, logged_in: req.session.logged_in});
  } catch (err) {
    res.status(500).json(err);
  }
});
    
router.post('/', async (req, res) => {
  try {
    const newComment = await Comment.create({
      content:req.body.content,
      date_created:req.body.date_created,
      user_id:req.session.user_id,
    });
    res.json(newComment);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;