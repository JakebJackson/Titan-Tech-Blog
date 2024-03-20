const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Posts extends Model {}

Posts.init(
    {
        post_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        post_title: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        post_content: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        user_id: { // Foreign key to reference the User model
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user', // This should match the model name of the User model
                key: 'id', // This should match the primary key of the User model
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'posts',
    }
);

module.exports = Posts;