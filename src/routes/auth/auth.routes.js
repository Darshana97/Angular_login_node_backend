import { Router } from "express";
import { check, validationResult } from 'express-validator';
import authBodyValidator from "../../middlewares/auth/authBodyValidators";
import bcrypt from 'bcryptjs';
import gravatar from 'gravatar';
import { model } from "mongoose";

const router = Router();

const User = model("user");

const authValidator = [
    check("email", "Enter a valid email address").isEmail(),
    check("password", "Password must be at least 6 characters").isLength({ min: 6 })

];


//Login
router.post("/login", authValidator, authBodyValidator, async (req, res) => {


});


//Register
router.post("/register", authValidator, authBodyValidator, async (req, res) => {

    try {

        let { email, password } = req.body;

        const image = gravatar.url(email, {

            s: "200",
            r: "pg",
            d: "mm"

        });

        //encrypt password
        const salt = await bcrypt.genSalt(10);
        password = await bcrypt.hash(password, salt);

        //add to database
        const newUser = new User({ email, password, image });
        await newUser.save();


        return res.status(200).json(newUser);

    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ errors: [{ msg: "Internal Server Error" }] });
    }


});


export default router;