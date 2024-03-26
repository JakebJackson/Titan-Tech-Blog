const router = require('express').Router();
const userRoutes = require('./userRoutes');
const appRoutes = require('./appRoutes');

router.use('/users',userRoutes);
router.use('/app',appRoutes);

module.exports = router;