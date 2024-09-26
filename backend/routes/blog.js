const express = require('express');
const router = express.Router();
const BlogPost = require('../models/BlogPost');

// 블로그 포스트 추가
router.post('/add', async (req, res) => {
  const { title, content } = req.body;

  const newPost = new BlogPost({ title, content });

  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(500).json({ error: 'Failed to save blog post' });
  }
});

// 블로그 포스트 조회
router.get('/', async (req, res) => {
  try {
    const posts = await BlogPost.find();
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch blog posts' });
  }
});

module.exports = router;
