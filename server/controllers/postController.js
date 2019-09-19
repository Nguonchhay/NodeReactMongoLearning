const Post = require('./../database/models/Post')
const User = require('./../database/models/User')
const path = require('path')
const CONSTANT = require('./../constants')


const listPost = async (req, res) => {
    const posts = await Post.find({}).populate('author')

    return res.render('posts/index', {posts})
}

const createPost = async (req, res) => {
    const users = await User.find({})

    return res.render('posts/create', {
        users
    })
}

const storePost = (req, res) => {
    let postData = {
        ...req.body,
        author: req.session.userId
    }

    const { thumbnail } = req.files
    thumbnail.mv(path.resolve(__dirname, '../' + CONSTANT.uploadFilePath + '/posts/' + thumbnail.name), (err) => {
        postData = {
            ...postData,
            thumbnail: CONSTANT.readUploadFilePath + '/posts/' + thumbnail.name
        }

        Post.create(postData, (err, post) => {
            if (err) {
                const errPostCreate = Object.keys(err.errors).map(key => err.errors[key].message)
                req.flash('errorPostCreate', errPostCreate),
                req.flash('postData', req.body)
                return res.redirect(CONSTANT.url.URL_POSTS_CREATE)
            }
    
            res.redirect(CONSTANT.url.URL_POSTS)
        })
    })
}

module.exports = {
    listPost,
    createPost,
    storePost
}