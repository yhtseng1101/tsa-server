const express = require('express');
const bodyParser = require('body-parser');
const authenticate = require('../authenticate');

const guideRouter = express.Router();

guideRouter.use(bodyParser.json());

guideRouter.route('/')
.get(authenticate.verifyUser, (req, res, next) => {
    res.end('Will send all the guides to you');
})
.post((req, res) => {
    res.end('POST operation is not supported');
})
.put((req, res) => {
    res.end('PUT operation is not supported');
})
.delete((req, res) => {
    res.end('DELETE operation is not supported');
});

module.exports = guideRouter;