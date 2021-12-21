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

// menambahkan data
exports.tambahData = function (req, res) {
    var currentac = req.body.currentac;
    var voltageac = req.body.voltageac;
    var currentdc = req.body.currentdc;
    var voltagedc = req.body.voltagedc;

    connection.query('INSERT INTO data (currentac,voltageac,currentdc,voltagedc) VALUES(?,?,?,?)',
        [currentac, voltageac, currentdc, voltagedc],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil Menambahkan Data!", res)
            }
        });
};

// mengubah data berdasarkan id
exports.ubahData = function (req, res) {
    var id = req.body.id;
    var currentac = req.body.currentac;
    var voltageac = req.body.voltageac;
    var currentdc = req.body.currentdc;
    var voltagedc = req.body.voltagedc;

    connection.query('UPDATE data SET currentac=?, voltageac=?, currentdc=?, voltagedc=? WHERE id=?', [currentac, voltageac, currentdc, voltagedc, id],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil Merubah Data", res)
            }
        });
};

// menghapus data berdasarkan id
exports.hapusData = function (req, res) {
    var id = req.body.id;
    connection.query('DELETE FROM data WHERE id=?', [id],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil Menghapus Data", res)
            }
        });
};