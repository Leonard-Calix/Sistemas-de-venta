import { Router, Request, Response } from "express";
import MySQL from '../mysql/mysql';

const router = Router();

router.get('/', (req: Request, res: Response) => {

    const query =  `SELECT p.nombre, p.apellido, u.correo, u.telefono, p.direccion FROM usuario u
                    INNER JOIN persona p ON p.idpersona=u.idpersona`; 

    MySQL.ejecutarQuery( query, ( err:any, usuarios:Object[] ) => {

        if ( err ) {
            res.json({
                ok: false,
                error: err
            });
        } else{
            res.json({
                ok: true,
                usuarios
            });
        }

    });

   

});

export default router;