import express, {Application} from "express";
import usuariosRoutes from "../routes/usuarios.route";

import cors from "cors";

class Server{

    private app: Application;
    private port: string;
    private apiRoutes = {
        usuarios: "/usuarios"
    }

    constructor(){
        this.app = express();
        // this.port = process.env.PORT || "8000";
        this.port = "8000";

        // Metodos iniciales
        this.middlewares();
        this.routes();
    }

    middlewares(){

        // cors
        this.app.use( cors() );

        // Parseo al hacer POST
        this.app.use( express.json() );
        this.app.use( express.urlencoded({extended: true}) );

        // Carpeta public
        this.app.use( express.static('public') );

    }

    routes(){
        this.app.use(this.apiRoutes.usuarios, usuariosRoutes);
    }

    listen(){
        this.app.listen( this.port, () =>{
            console.log(`App corriendo en el puertoooo ${this.port}`);
        })
    }

}

export default Server;