const { connection } = require("../database");

exports.getUsers = (req, res) => {
    connection.query(
        'SELECT * FROM `users`',
        function(err, results, fields) {
          res.json(results);
        }
    );
};

exports.getUser = (req, res) => {
    const id = req.params.id;
    connection.query(
        'SELECT * FROM `users` WHERE `id` = ? ',
        [id],
        function(err, results) {
          res.json(results);
        });
};

exports.addUser = (req, res, next) => {
    connection.query(
        'INSERT INTO `users`(`fname`, `lname`, `username`, `password`, `avatar`) VALUES (?,?,?,?,?)',
        [req.body.fname, req.body.lname, req.body.username, req.body.password, req.body.avatar],
        function(err, results) {
          res.json(results);
        });
}

exports.updateUser = (req, res) => {
    connection.query(
        'UPDATE `users` SET `fname`=?,`lname`=?,`username`=?,`password`=?,`avatar`=? WHERE id = ?',
        [req.body.fname, req.body.lname, req.body.username, req.body.password, req.body.avatar, req.body.id],
        function(err, results) {
          res.json(results);
        }
    );
};

exports.deleteUser = (req, res) => {
    connection.query(
        'DELETE FROM `users` WHERE id = ?',
        [req.body.id],
        function(err, results) {
          res.json(results);
        }
    );
};

