const router = require('express').Router();
const { User, Posts } = require('../../models');

router.post('/new-post', async (req, res) => {
    try {
        console.log(`Logging req.body: ${req.body}`);
        // Grab posts data from request body
        const { postTitle, postText, postAuthor } = req.body;
        const userId = req.session.user_id;

        // Create a new post in database
        const newPostData = await Posts.create({
            post_title: postTitle,
            post_content: postText,
            post_author: postAuthor,
            user_id: userId,
        });
        
        res.json(newPostData);

    } catch (err) {
        // If an error occurs, respond with a 400 status and the error message
        console.log(err)
        res.status(400).json(err);
    }


});

module.exports = router;