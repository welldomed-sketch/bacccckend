import { Router } from "express";
import { createuser ,loginuser,logoutuser} from "./usercont.js";
const router = Router();
router. route("/register").post( createuser);
router.route("/login").post(loginuser);
router.route("/logout").post(logoutuser);
export default router;