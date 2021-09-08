import { DataTypes } from "sequelize";
import db from "../db/connection";

// Creacion de modelo

const CamposTabla = {
    nombre: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING,
        require: true
    },
    estado: {
        type: DataTypes.BOOLEAN,
        default: true
    }
}

const UsuariosSchema =  db.define('usuarios', CamposTabla);
export default UsuariosSchema;