import { NextFunction, Request, Response } from "express";
import { plainToClass } from "class-transformer";
import { validate } from "class-validator";

class ValidateMiddlewareDTO {
    constructor() { }

    public async validator(
        req: Request,
        res: Response,
        next: NextFunction,
        type: any
    ) {
        try {
            const dto = plainToClass(type, req.body);
            const errors = await validate(dto);

            return errors.length > 0
                ? res.status(400).json({ errors })
                : ((req.body = dto), next());
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: "Internal Server Error" });
        }
    }
}
export default ValidateMiddlewareDTO;