const express = require('express');
const router = express.Router();
const SocialMedia = require('../models/SocialMedia');

// Tüm sosyal medya linklerini getirme
router.get('/', async (req, res) => {
  try {
    const links = await SocialMedia.find();
    res.json(links);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Sosyal medya linki ekleme
router.post('/', async (req, res) => {
  const socialMedia = new SocialMedia({
    link: req.body.link,
    name: req.body.name,
    description: req.body.description
  });
  try {
    const newLink = await socialMedia.save();
    res.status(201).json(newLink);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Sosyal medya linkini güncelleme
router.put('/:id', async (req, res) => {
  try {
    const updatedLink = await SocialMedia.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedLink);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Sosyal medya linkini silme
router.delete('/:id', async (req, res) => {
  try {
    await SocialMedia.findByIdAndDelete(req.params.id);
    res.json({ message: 'Link deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
