'use strict';

const express = require('express');
const router = express.Router();

const auth = require('./middleware.js');
const Role = require('./roles-model.js');

router.post('/roles', (req, res, next) => {
  let role = new Role(req.body);
  role.save();
  res.status(200).send('saved role to db');
});

router.get('/public-stuff', (req, res, next) => {
  res.status(200).send('this is a public route');
});

router.get('/hidden-stuff', auth(), (req, res, next) => {
  res.status(200).send('this is the hidden-stuff');
});

router.get('/something-to-read', auth('read'), (req, res, next) => {
  res.status(200).send('you can read this only');
});

router.post('/create-a-thing', auth('create'), (req, res, next) => {
  res.status(200).send('you can create something');
});

router.put('/update', auth('update'), (req, res, next) => {
  res.status(200).send('you can update this');
});

router.put('/jp', auth('update'), (req, res, next) => {
  res.status(200).send('you can update this');
});

router.delete('/bye-bye', auth('delete'), (req, res, next) => {
  res.status(200).send('you can delete!');
});

router.get(
  '/everything',
  auth('create'),
  auth('read'),
  auth('update'),
  auth('delete'),
  (req, res, next) => {
    res.status(200).send('you can do everything');
  }
);

module.exports = router;
