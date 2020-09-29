import { Router, Request, Response } from "express";
import MySQL from '../mysql/mysql';

const router = Router();

router.get('/heroes', (req: Request, res: Response) => {

    const query = `SELECT * FROM heroes`; 

    MySQL.ejecutarQuery( query, ( err:any, heroes:Object[] ) => {

        if ( err ) {
            res.json({
                ok: false,
                error: err
            });
        } else{
            res.json({
                ok: true,
                heroes
            });
        }

    });

   

});

router.get('/heroes/:id', (req: Request, res: Response) => {

    const id = req.params.id; 
    const escapeID = MySQL.instance.cnn.escape( id ); 

    const query = `SELECT * FROM heroes WHERE id = ${ escapeID }`; 

    MySQL.ejecutarQuery( query, ( err:any, heroe:Object[] ) => {

        if ( err ) {
            res.json({
                ok: false,
                error: err
            });
        } else{
            res.json({
                ok: true,
                heroe : heroe[0]
            });
        }

    });

});

router.delete('/heroes/eliminar/:id', (req: Request, res: Response) => {

    const id = req.params.id; 
    const escapeID = MySQL.instance.cnn.escape( id ); 

    const query = `DELETE FROM heroes WHERE id = ${ escapeID }`; 
 
    MySQL.ejecutarQuery( query, ( err:any, resul:Object ) => {

        if ( err ) {
            res.json({
                ok: false,
                error: err
            });
        } else{
            res.json({
                ok: true,
                message: 'Eliminado con exito'
            });
        }

    });

});

router.post('/heroes/agregar', (req: Request, res: Response) => {

    const nombre = MySQL.instance.cnn.escape( 'Magneto' ); 
    const poderes = MySQL.instance.cnn.escape( 'Controla el metal' ); 


    const query = `INSERT INTO heroes (nombre, poder) VALUES( ${ nombre }, ${ poderes } ) `; 
 
    MySQL.ejecutarQuery( query, ( err:any, resul:Object ) => {

        if ( err ) {
            res.json({
                ok: false,
                error: err
            });
        } else{
            res.json({
                ok: true,
                message: 'Agregado con exito',
                resul
            });
        }

    });

});


router.get('/update/:id', (req: Request, res: Response) => {

    const id = req.params.id; 

    const nombre = MySQL.instance.cnn.escape( 'Magneto' ); 
    const poderes = MySQL.instance.cnn.escape( 'Controla el metal y Acero' ); 
    const escapeID = MySQL.instance.cnn.escape( id ); 



    const query = `UPDATE heroes SET nombre = ${ nombre }, SET poder = ${ poderes } WHERE id = ${ escapeID } `; 
 
    MySQL.ejecutarQuery( query, ( err:any, resul:Object ) => {

        if ( err ) {
            res.json({
                ok: false,
                error: err
            });
        } else{
            res.json({
                ok: true,
                message: 'Editado con exito',
                resul
            });
        }

    });

});

export default router;