const express = require('express')
const {getPosts, createPost,postByUser} = require('../controllers/post')
const {createPostValidator} = require('../validator/index')
const {requireSignin} = require('../controllers/auth')
const {userById} = require('../controllers/user')

const router = express.Router()

router.get('/',getPosts);
router.post('/post/new/:userId', requireSignin, createPost, createPostValidator);
router.get('/posts/by/:userId', requireSignin,postByUser);
// any routes containing userid, our app will first execute userById()
router.param("userId", userById);

module.exports = router;
