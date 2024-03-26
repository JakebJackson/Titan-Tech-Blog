const router = require('express').Router();
const { User, Posts } = require('../models');
const withAuth = require('../utils/auth');
const dotenv = require('dotenv').config();

router.get('/', withAuth, async (req, res) => {
  try {
    console.log(`Logged in User ID: ${req.session.user_id}`);

    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
    });

    const user = userData.get({ plain: true });

    const posts = await Posts.findAll({
      order: [['post_id', 'DESC']],
      raw: true,
    });

    console.log(posts);

    res.render('dashboard', {
      user,
      posts,
      dashboard: true,
      profile: false,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/profile', withAuth, async (req, res) => {
  try {
    console.log(req.session.user_id);

    const userData = await User.findByPk(req.session.user_id, {
      include: [{ model: Posts }],      
      attributes: { exclude: ['password'] },
    });

    const user = userData.get({ plain: true });

    const posts = await Posts.findAll({
      order: [['post_id', 'DESC']],
      raw: true,
    });
    
    console.log(posts);

    res.render('profile', {
      user,
      posts,
      dashboard: false,
      profile: true,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

/* router.get('/about-us', async (req, res) => {
  try {
    res.render('about-us', {
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});*/

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;