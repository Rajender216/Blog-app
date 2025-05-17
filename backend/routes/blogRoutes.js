// Sample API Specifications:
// Method Endpoint Description
// POST /api/blogs/save-draft Save or update a draft
// POST /api/blogs/publish Save and publish an article
// GET /api/blogs Retrieve all blogs
// GET /api/blogs/:id Retrieve a blog by ID

import express from 'express';
import { saveDraft, publishBlog, getAllBlogs, getBlogById } from '../controllers/blogControllers.js';
import  authenticateUser  from '../middlewares/authMiddleware.js';

const blogRouter = express.Router();

blogRouter.post('/save-draft', authenticateUser, saveDraft);
blogRouter.post('/publish', authenticateUser, publishBlog);
blogRouter.get('/', getAllBlogs);
blogRouter.get('/:id', getBlogById);

export default blogRouter;