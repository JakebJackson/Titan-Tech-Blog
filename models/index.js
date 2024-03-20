const User = require('./User');
const Posts = require('./Posts');

// Defines the relationships between the tables within the database.
// Each user can have many Images and Faces, each image and face belongs to a user.

User.hasMany(Posts, {
    foreignKey: 'user_id', // Corrected foreign key to 'user_id'
});

Posts.belongsTo(User, {
    foreignKey: 'user_id', // Corrected foreign key to 'user_id'
    onDelete: 'CASCADE'
});

module.exports = { User, Posts };
