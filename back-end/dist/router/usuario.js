"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const mysql_1 = __importDefault(require("../mysql/mysql"));
const router = express_1.Router();
router.get('/', (req, res) => {
    const query = `SELECT p.nombre, p.apellido, u.correo, u.telefono, p.direccion FROM usuario u
                    INNER JOIN persona p ON p.idpersona=u.idpersona`;
    mysql_1.default.ejecutarQuery(query, (err, usuarios) => {
        if (err) {
            res.json({
                ok: false,
                error: err
            });
        }
        else {
            res.json({
                ok: true,
                usuarios
            });
        }
    });
});
exports.default = router;
