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

// menampilkan semua data berdasarkan id
exports.tampildataberdasarkanid = function (req, res) {
    let id = req.params.id;
    connection.query('SELECT * FROM data WHERE id = ?', [id],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok(rows, res);
            }
        });
};
