'use strict';

var response = require('./res');
var connection = require('./koneksi');

exports.index = function (req, res) {
    response.ok("REST API!!", res)
};

// menampilkan semua data
exports.tampilsemuadata = function (req, res) {
    connection.query('SELECT * FROM data', function (error, rows, fileds) {
        if (error) {
            console.log(error);
        } else {
            response.ok(rows, res)
        }
    });
};