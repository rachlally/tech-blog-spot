const express = require('express');
const router = express.Router();
const {User,Post,Comment} = require('../models');

router.get("/", (req,res)=>{
    Post.findAll().then(posts=>{
        const postsHbsData = posts.map(post=>post.get({plain:true}))
        console.log(posts);
        console.log("============")
        console.log(postsHbsData)    
        res.render("home",{
            posts:postsHbsData
            // logged_in:req.session.logged_in
        })
    })
    
})

router.get('/post/:id', (req, res) => {
    Post.findByPk(req.params.id, {
        include:[User]
    }).then(post=> {
        const postHbsData = post.get({plain:true});
        console.log(post);
        console.log("===========")
        console.log(postHbsData)
        
        res.render("singlepost", postHbsData)
    })
})

router.get("/sessions",(req,res)=>{
    res.json(req.session)
});

router.get("/login",(req,res)=>{
    if(req.session.logged_in){
        return res.redirect("/profile")
    }
    res.render("login")
});

router.get("/profile",(req,res)=>{
    if(!req.session.logged_in){
        return res.redirect("/login")
    }
    User.findByPk(req.session.user_id,{
        include:[Project]
    }).then(userData=>{
        const hbsData = userData.toJSON();
        console.log(hbsData)
        hbsData.logged_in=req.session.logged_in
        res.render("profile",hbsData)
    })
});

module.exports = router;