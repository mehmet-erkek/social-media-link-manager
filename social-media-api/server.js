const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

let socialMediaLinks = [
  { id: 1, link: 'instagram.com/mobilerast/', name: 'instagram', description: 'We\'ll help you to finish your development project successfully.' },
  { id: 2, link: 'tr.linkedin.com/company/rastmobile', name: 'linkedin', description: 'Hire vetted developers from Rast Mobile to scale up your tech projects.' },
  { id: 3, link: 'behance.net/rastmobile', name: 'behance', description: 'Software Development Agency Rast Mobile Information Technology Ltd.' },
  { id: 4, link: 'twitter.com/rastmobile', name: 'twitter', description: 'Software Development Agency Rast Mobile Information Technology Ltd.' }
];

//Burada express ile get post put delete api lerini tanımladım. 

// Get
app.get('/api/socialmedia/links', (req, res) => {
  res.json(socialMediaLinks);
});

// Add
app.post('/api/socialmedia/links', (req, res) => {
  const newLink = { id: socialMediaLinks.length + 1, ...req.body };
  socialMediaLinks.push(newLink);
  res.json(newLink);
});

// Update
app.put('/api/socialmedia/links/:id', (req, res) => {
  const linkId = parseInt(req.params.id);
  const updatedLink = { id: linkId, ...req.body };
  socialMediaLinks = socialMediaLinks.map(link => (link.id === linkId ? updatedLink : link));
  res.json(updatedLink);
});

// Delete
app.delete('/api/socialmedia/links/:id', (req, res) => {
  const linkId = parseInt(req.params.id);
  socialMediaLinks = socialMediaLinks.filter(link => link.id !== linkId);
  res.json({ message: 'Link deleted successfully' });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
