import express from 'express';
import { followAndUnfollowUser, loginUser, logoutUser, myProfile, registerUser, userProfile } from '../controllers/userController.js';
import { isAuth } from '../middlewares/isAuth.js';

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/logout", isAuth, logoutUser);
router.get("/me", isAuth, myProfile);
router.get("/:id", isAuth, userProfile);
router.post("/follow/:id", isAuth, followAndUnfollowUser);


export default router;
