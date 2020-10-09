"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const mysql_1 = __importDefault(require("../mysql/mysql"));
const router = express_1.Router();
router.get('/', (req, res) => {
    const query = ` SELECT pro.nombre, pro.precioUnitario, ent.cantidad FROM  producto pro 
                     INNER JOIN entradas ent ON pro.idproducto=ent.idproducto`;
    mysql_1.default.ejecutarQuery(query, (err, productos) => {
        if (err) {
            res.json({
                ok: false,
                error: err
            });
        }
        else {
            res.json({
                ok: true,
                productos
            });
        }
    });
});
exports.default = router;
