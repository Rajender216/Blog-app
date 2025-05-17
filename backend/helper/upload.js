// backend/controllers/blogController.js
import cloudinary from '../config/cloudinary.js';
import fs from 'fs';

export const uploadToCloudinary = async (req, res) => {
  try {
    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: "blog-assign",        // Folder in Cloudinary
      resource_type: "auto",        // Support images, pdfs, videos
    });

    fs.unlinkSync(req.file.path); // Delete temp file

    res.status(200).json({
      url: result.secure_url,
      public_id: result.public_id,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
