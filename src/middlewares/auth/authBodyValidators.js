import { validationResult } from "express-validator"

const authBodyValidator = async (req, res, next) => {

    const myErrors = validationResult(req);
    if (!myErrors.isEmpty()) {
        return res.status(400).json({ errors: myErrors.array() });
    }
    next();

}

export default authBodyValidator;