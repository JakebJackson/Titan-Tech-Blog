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

router.delete('/delete/:id', async (req, res) => {
    try{
        const postID = parseInt(req.params.id);
        console.log(`Post ID: ${req.params.id}`);

        await Posts.destroy({ where: { post_id: postID } });

        res.status(204).end();
    }
    catch (error) {
        console.error('Error deleting image:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;