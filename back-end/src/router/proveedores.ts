import { Router, Request, Response } from "express";
import MySQL from '../mysql/mysql';

const router = Router();

router.get('/', (req: Request, res: Response) => {

    const query =  ` SELECT * FROM proveedor;`; 

    MySQL.ejecutarQuery( query, ( err:any, proveedores:Object[] ) => {

        if ( err ) {
            res.json({
                ok: false,
                error: err
            });
        } else{
            res.json({
                ok: true,
                proveedores
            });
        }

    });

});

export default router;