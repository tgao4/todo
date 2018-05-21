var {User} = require('./../models/user');


var authenticate1 = (req, res, next) => {
  var token = req.cookies.cookie;

  User.findByToken(token).then((user) => {
    if (!user) {
      return Promise.reject();
    }

    req.user = user;
    req.token = token;
    next();
  }).catch((e) => {
    // res.status(401).send();
    return res.redirect('/');
  });
};

module.exports = {authenticate1};
