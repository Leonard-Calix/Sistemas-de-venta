import mysql = require('mysql');

export default class MySQL {


    private static _instance: MySQL;

    cnn: mysql.Connection;
    conectado: boolean = false;

    constructor() {
        console.log('Clase Inicializada');

        this.cnn = mysql.createConnection({
            host: 'localhost',
            user: 'leonardo-94',
            password: '123456',
            database: 'sistemaventas'
        });

        this.conectarDB();

    }

    public static get instance() {
        return this._instance || (this._instance = new this());
    }

    static ejecutarQuery(query: string, callback: Function) {

        this.instance.cnn.query(query, (err, results: Object[], fields) => {

            if (err) {
                console.log('Error en el Query');
                console.log(err);
                return callback(err);
            }

            if (results.length === 0) {
                callback('registro no existe');
            } else {
                callback(null, results);

            }


        });

    }

    private conectarDB() {
        this.cnn.connect((err: mysql.MysqlError) => {

            if (err) {
                console.log(err.message);
                return;
            }

            this.conectado = true;
            console.log('Base de datos online conectada');

        });
    }

}