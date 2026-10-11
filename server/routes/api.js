const express = require('express');
const router = express.Router();
const profileController = require('../controllers/profileController');

router.get('/profile', profileController.getProfile);
router.get('/projects', profileController.getProjects);
router.get('/skills', profileController.getSkills);
router.get('/coding-profiles', profileController.getCodingProfiles);
router.post('/contact', profileController.submitContact);

module.exports = router;
