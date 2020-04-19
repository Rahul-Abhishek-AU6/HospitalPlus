var mongoose = require ('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect("mongodb://root:qwerty123@ds019048.mlab.com:19048/e-commerce-course-project");

module.exports = {mongoose};
