"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./server/server"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
// Rutas
const usuario_1 = __importDefault(require("./router/usuario"));
const clientes_1 = __importDefault(require("./router/clientes"));
const proveedores_1 = __importDefault(require("./router/proveedores"));
const entradas_1 = __importDefault(require("./router/entradas"));
const producto_1 = __importDefault(require("./router/producto"));
const server = new server_1.default();
// Body parser
server.app.use(body_parser_1.default.urlencoded({ extended: true }));
server.app.use(body_parser_1.default.json());
server.app.use(cors_1.default());
server.app.use('/usuario', usuario_1.default);
server.app.use('/cliente', clientes_1.default);
server.app.use('/proveedores', proveedores_1.default);
server.app.use('/entradas', entradas_1.default);
server.app.use('/productos', producto_1.default);
// Levanatar el server
server.start(() => {
    console.log(`Seridor corriendo en puerto ${server.port}`);
});
