import BlogM from "../models/BlogModel.js";

export const getAllBlogs = async (req, res) => {
    try {
        const blogs = await BlogM.findAll()
        res.json(blogs)
    } catch (error) {
        res.json({ message: error.message })
    }
}

export const getBlog = async (req, res) =>{
    try {
        const blog = await BlogM.findAll({
            where:{ idblogs:req.params.id }
        })
        res.json(blog[0])
    } catch (error) {
        res.json({ message: error.message })
    }
}

export const createBlog = async (req, res) => {
    try {
        await BlogM.create(req.body)
        res.json({
            "message": "¡Registro creado!"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}

export const updateBlog = async (req, res) => {
    try {
        await BlogM.update(req.body, {
            where:{idblogs:req.params.id}
        })
        res.json({
            "message": "¡Registro actualizado!"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}

export const deleteBlog = async (req, res) => {
    try {
        await BlogM.destroy({
            where:{idblogs:req.params.id}
        })
        res.json({
            "message": "¡Registro Eliminado!"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}

