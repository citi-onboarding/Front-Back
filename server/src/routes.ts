import express from "express";
import userController from "./controllers/UserController";
import ShirtController from "./controllers/ShirtController";

const routes = express.Router();

routes.post("/user", userController.create);
routes.get("/user", userController.get);
routes.delete("/user/:id", userController.delete);
routes.patch("/user/:id", userController.update);

routes.post("/shirt", ShirtController.create);
routes.get("/shirt", ShirtController.get);
routes.get("/shirt/:id", ShirtController.getById);
routes.get("/shirt/empyte", ShirtController.getEmpyte);
routes.delete("/shirt/:id", ShirtController.delete);
routes.patch("/shirt/:id", ShirtController.update);

export default routes;


