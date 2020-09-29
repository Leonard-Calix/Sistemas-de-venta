import { Router, Request, Response } from "express";
import MySQL from '../mysql/mysql';

const router = Router();

router.get('/', (req: Request, res: Response) => {

    const query =  ` SELECT p.nombre, p.apellido, p.direccion FROM cliente c
                     INNER JOIN persona p ON p.idpersona=c.idpersona;`; 

    MySQL.ejecutarQuery( query, ( err:any, clientes:Object[] ) => {

        if ( err ) {
            res.json({
                ok: false,
                error: err
            });
        } else{
            res.json({
                ok: true,
                clientes
            });
        }

    });

});

export default router;