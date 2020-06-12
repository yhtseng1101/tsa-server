const express = require('express');
const bodyParser = require('body-parser');
const authenticate = require('../authenticate');

const guideRouter = express.Router();

guideRouter.use(bodyParser.json());

guideRouter.route('/guides', function(req, res, next) {
    res.render('guides', { title: 'Express' });
  });

// .get(authenticate.verifyUser, (req, res, next) => {
//     res.end('Will send all the guides to you');
// })
// .post((req, res) => {
//     res.end(`Will add the guide: ${req.body.name} with description: ${req.body.description}`);
// })
// .put((req, res) => {
//     res.end(`Will update the guide: ${req.body.name} with description: ${req.body.description}`);
// })
// .delete((req, res) => {
//     res.end('Deleting all guides');
// });


module.exports = guideRouter;