// Create web server
app.get('/comments', (req, res) => {
  res.json(comments);
});

app.post('/comments', (req, res) => {
  const comment = req.body;
  comment.id = Date.now();
  comments = comments.concat([comment]);
  res.json(comment);
});

app.put('/comments/:id', (req, res) => {
  const update = req.body;
  comments = comments.map(comment => {
    if (comment.id === +req.params.id) {
      return update;
    }
    return comment;
  });
  res.json(update);
});

app.delete('/comments/:id', (req, res) => {
  comments = comments.filter(comment => comment.id !== +req.params.id);
  res.json({ id: +req.params.id });
});

app.listen(3001, () => {
  console.log('Server is running on http://localhost:3001');
});

// Path: index.js
import React, { Component } from 'react';
import Comment from './Comment';
import CommentForm from './CommentForm';

class CommentList {}