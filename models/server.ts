import express, {Application} from "express";
import usuariosRoutes from "../routes/usuarios.route";

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
        // Definir mis rutas
        this.routes();
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