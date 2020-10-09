import Server from './server/server';
import bodyParser from 'body-parser';
import cors from 'cors';

// Rutas

import rutaUsuario from "./router/usuario";
import rutaClientes from "./router/clientes";
import rutaProveedores from "./router/proveedores";
import rutaEntradas from "./router/entradas";
import rutaProducto from "./router/producto";


const server = new Server();

// Body parser
server.app.use(bodyParser.urlencoded({ extended: true }));
server.app.use(bodyParser.json());

server.app.use(cors());

server.app.use('/usuario', rutaUsuario);
server.app.use('/cliente', rutaClientes);
server.app.use('/proveedores', rutaProveedores);
server.app.use('/entradas', rutaEntradas);
server.app.use('/productos', rutaProducto);




// Levanatar el server
server.start(() => {
    console.log(`Seridor corriendo en puerto ${server.port}`)
});



