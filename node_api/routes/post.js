const express = require('express')
const {
        getPosts,
        createPost,
        postByUser,
        postById,
        isPoster,
        deletePost,
        updatePost
    } = require('../controllers/post')
const {createPostValidator} = require('../validator/index')
const {requireSignin} = require('../controllers/auth')
const {userById} = require('../controllers/user')

const router = express.Router()

router.get('/posts',getPosts);
router.post('/post/new/:userId', requireSignin, createPost, createPostValidator);
router.get('/posts/by/:userId', requireSignin,postByUser);
router.delete('/post/:postId', requireSignin, isPoster, deletePost);
router.put('/post/:postId', requireSignin, isPoster, updatePost);

// any routes containing userid, our app will first execute userById()
router.param("userId", userById);
router.param("postId", postById);

module.exports = router;
