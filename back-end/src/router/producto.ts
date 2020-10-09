import { Router, Request, Response } from "express";
import MySQL from '../mysql/mysql';

const router = Router();

router.get('/', (req: Request, res: Response) => {

    const query = ` SELECT pro.nombre, pro.precioUnitario, ent.cantidad FROM  producto pro 
                     INNER JOIN entradas ent ON pro.idproducto=ent.idproducto`;

    MySQL.ejecutarQuery(query, (err: any, productos: Object[]) => {

        if (err) {
            res.json({
                ok: false,
                error: err
            });
        } else {
            res.json({
                ok: true,
                productos
            });
        }

    });


});

export default router;