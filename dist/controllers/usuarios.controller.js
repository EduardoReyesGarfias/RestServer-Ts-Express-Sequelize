"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUsuario = exports.updateUsuario = exports.createUsuario = exports.getUsuarioById = exports.getAllUsuarios = void 0;
/**
 * Trae todos los usuarios de la DB
 * @param req
 * @param res
 */
const getAllUsuarios = (req, res) => {
    res.json({
        msg: "Entro al getAllUsuarios"
    });
};
exports.getAllUsuarios = getAllUsuarios;
/**
 * Traigo un usuario de acuerdo a su id
 * @param req
 * @param res
 */
const getUsuarioById = (req, res) => {
    const { _id } = req.params;
    res.json({
        msg: "Entro al getUsuarioById",
        id: _id
    });
};
exports.getUsuarioById = getUsuarioById;
/**
 * Crear usuario
 * @param req
 * @param res
 */
const createUsuario = (req, res) => {
    res.json({
        msg: "Entro a createUsuario",
        body: req.body
    });
};
exports.createUsuario = createUsuario;
/**
 * Actualiza un usuario
 * @param req
 * @param res
 */
const updateUsuario = (req, res) => {
};
exports.updateUsuario = updateUsuario;
/**
 * Elimina un usuario
 * @param req
 * @param res
 */
const deleteUsuario = (req, res) => {
};
exports.deleteUsuario = deleteUsuario;
//# sourceMappingURL=usuarios.controller.js.map