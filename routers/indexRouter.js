import express from 'express';
const indexRouter = express.Router();

const messages = [
  {
    text: 'Hi There!',
    user: 'Amanda',
    added: new Date()
  },
  {
    text: 'Hello World!',
    user: 'Charles',
    added: new Date()
  }
];

indexRouter.get('/', (req, res) => {
  res.render('index', {title: "Mini Messageboard", messages: messages});
})

indexRouter.get('/new', (req, res) => {
  res.render('form');
})

indexRouter.post('/new', (req, res) => {
  messages.push({
    text: req.body.messageText,
    user: req.body.userName,
    added: new Date()
  });

  res.redirect('/');
})

indexRouter.get('/:messageId', (req, res) => {
  const messageIndex = req.params.messageId;
  res.render('message', { message: messages[messageIndex]});
})

export default indexRouter;