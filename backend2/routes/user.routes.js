import express from "express"
import { SignUp } from "../controllers/user.controllers.js";

const router = express.Router();

router.use('/signUp', SignUp);

export default  router;