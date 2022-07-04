import db from "../database/db.js";
import { DataTypes } from 'sequelize'

const BlogM = db.define('blogs', {
    title: { type: DataTypes.STRING },
    content: { type: DataTypes.STRING },
    createdAt: {field: 'createdAt', type: DataTypes.DATE},
    updatedAt: {field: 'updatedAt', type: DataTypes.DATE}
})

export default BlogM