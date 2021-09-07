import { Request, Response } from "express";

/**
 * Trae todos los usuarios de la DB
 * @param req 
 * @param res 
 */
export const getAllUsuarios = (req: Request, res: Response) =>{
    res.json({
        msg: "Entro al getAllUsuarios"
    })
}

/**
 * Traigo un usuario de acuerdo a su id
 * @param req 
 * @param res 
 */
export const getUsuarioById = (req: Request, res: Response) =>{

    const { _id } = req.params;

    res.json({
        msg: "Entro al getUsuarioById",
        id: _id
    })
}

/**
 * Crear usuario
 * @param req 
 * @param res 
 */
export const createUsuario = (req: Request, res: Response) =>{

    const {email, password} = req.body;

    res.json({
        msg: "Entro a createUsuariooooo",
        body: req.body,
        email: email,
        password: password,
        otro: "Otro nodo"
    });
}

/**
 * Actualiza un usuario
 * @param req 
 * @param res 
 */
export const updateUsuario = (req:Request, res: Response) =>{

}

/**
 * Elimina un usuario
 * @param req 
 * @param res 
 */
export const deleteUsuario = (req: Request, res: Response) =>{

}