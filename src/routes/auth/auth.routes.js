import { Router } from "express";
import { check, validationResult } from 'express-validator';
import authBodyValidator from "../../middlewares/auth/authBodyValidators";
import bcrypt from 'bcryptjs';
import gravatar from 'gravatar';

const router = Router();

const authValidator = [
    check("email", "Enter a valid email address").isEmail(),
    check("password", "Password must be at least 6 characters").isLength({ min: 6 })

];


//Login
router.post("/login", authValidator, authBodyValidator, async (req, res) => {


});


//Register
router.post("/register", authValidator, authBodyValidator, async (req, res) => {

    let { email, password } = req.body;

    const image = gravatar.url(email, {

        s: "200",
        r: "pg",
        d: "mm"

    });

    const salt = await bcrypt.genSalt(10);
    password = await bcrypt.hash(password, salt);

    return res.status(200).json({ email, password, image });


});


export default router;