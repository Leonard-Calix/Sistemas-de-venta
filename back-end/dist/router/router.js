"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const mysql_1 = __importDefault(require("../mysql/mysql"));
const router = express_1.Router();
router.get('/heroes', (req, res) => {
    const query = `SELECT * FROM heroes`;
    mysql_1.default.ejecutarQuery(query, (err, heroes) => {
        if (err) {
            res.json({
                ok: false,
                error: err
            });
        }
        else {
            res.json({
                ok: true,
                heroes
            });
        }
    });
});
router.get('/heroes/:id', (req, res) => {
    const id = req.params.id;
    const escapeID = mysql_1.default.instance.cnn.escape(id);
    const query = `SELECT * FROM heroes WHERE id = ${escapeID}`;
    mysql_1.default.ejecutarQuery(query, (err, heroe) => {
        if (err) {
            res.json({
                ok: false,
                error: err
            });
        }
        else {
            res.json({
                ok: true,
                heroe: heroe[0]
            });
        }
    });
});
router.delete('/heroes/eliminar/:id', (req, res) => {
    const id = req.params.id;
    const escapeID = mysql_1.default.instance.cnn.escape(id);
    const query = `DELETE FROM heroes WHERE id = ${escapeID}`;
    mysql_1.default.ejecutarQuery(query, (err, resul) => {
        if (err) {
            res.json({
                ok: false,
                error: err
            });
        }
        else {
            res.json({
                ok: true,
                message: 'Eliminado con exito'
            });
        }
    });
});
router.post('/heroes/agregar', (req, res) => {
    const nombre = mysql_1.default.instance.cnn.escape('Magneto');
    const poderes = mysql_1.default.instance.cnn.escape('Controla el metal');
    const query = `INSERT INTO heroes (nombre, poder) VALUES( ${nombre}, ${poderes} ) `;
    mysql_1.default.ejecutarQuery(query, (err, resul) => {
        if (err) {
            res.json({
                ok: false,
                error: err
            });
        }
        else {
            res.json({
                ok: true,
                message: 'Agregado con exito',
                resul
            });
        }
    });
});
router.get('/update/:id', (req, res) => {
    const id = req.params.id;
    const nombre = mysql_1.default.instance.cnn.escape('Magneto');
    const poderes = mysql_1.default.instance.cnn.escape('Controla el metal y Acero');
    const escapeID = mysql_1.default.instance.cnn.escape(id);
    const query = `UPDATE heroes SET nombre = ${nombre}, SET poder = ${poderes} WHERE id = ${escapeID} `;
    mysql_1.default.ejecutarQuery(query, (err, resul) => {
        if (err) {
            res.json({
                ok: false,
                error: err
            });
        }
        else {
            res.json({
                ok: true,
                message: 'Editado con exito',
                resul
            });
        }
    });
});
exports.default = router;
