import { getAllUsuarios, getUsuarioById, createUsuario, updateUsuario, deleteUsuario } from "../controllers/usuarios.controller";
import Router from "express";

const router = Router();

router.get(`/`, getAllUsuarios);
router.get(`/:_id`, getUsuarioById);
router.post(`/`, createUsuario);

export default router;