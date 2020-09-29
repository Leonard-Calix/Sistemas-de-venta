import { Router, Request, Response } from "express";
import MySQL from '../mysql/mysql';

const router = Router();

router.get('/', (req: Request, res: Response) => {

    const query =  ` SELECT * FROM vEntradas`; 

    MySQL.ejecutarQuery( query, ( err:any, entradas:Object[] ) => {

        if ( err ) {
            res.json({
                ok: false,
                error: err
            });
        } else{
            res.json({
                ok: true,
                entradas
            });
        }

    });

});

export default router;