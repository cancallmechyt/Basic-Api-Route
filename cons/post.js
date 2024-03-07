const { connection } = require("../database");

exports.getPosts = (req, res) => {
    connection.query(
        'SELECT * FROM `incidence`',
        function(err, results, fields) {
          res.json(results);
        }
    );
};

exports.getPost = (req, res) => {
    const pid = req.body.pid;
    connection.query(
        'SELECT * FROM `incidence` WHERE `pid` = ? ',
        [pid],
        function(err, results) {
          res.json(results);
        });
};

exports.getCategory = (req, res) => {
  const category = req.body.category; 
  connection.query(
      'SELECT * FROM `incidence` WHERE `category` = ?',
      [category],
      function(err, results, fields) {
        res.json(results);
      });
};


exports.addPost = (req, res, next) => {
    connection.query(
        'INSERT INTO `incidence`(`userId`, `title`, `category`, `detail`, `image`, `date`, `time`) VALUES (?,?,?,?,?,?,?)',
        [req.body.userId, req.body.title, req.body.category, req.body.detail, req.body.image, req.body.date, req.body.time],
        function(err, results) {
          res.json(results);
        });
}

exports.updatePost = (req, res) => {
    connection.query(
        'UPDATE `incidence` SET `userId`=?, `title`=?, `category`=?, `detail`=?, `image`=?, `date`=?, `time`=? WHERE pid = ?',
        [req.body.userId, req.body.title, req.body.category, req.body.detail, req.body.image, req.body.date, req.body.time, req.body.pid],
        function(err, results) {
          res.json(results);
        }
    );
};

exports.deletePost = (req, res) => {
    connection.query(
        'DELETE FROM `incidence` WHERE pid = ?',
        [req.body.pid],
        function(err, results) {
          res.json(results);
        }
    );
};