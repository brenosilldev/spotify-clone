import jwt from "jsonwebtoken";

export const GenerateToken = (iduser,res) => {

    const token = jwt.sign({ iduser },process.env.SECRET_KEY, { expiresIn: "1d" });


    res.cookie("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== "development",
        sameSite: "strict",
        maxAge: 24 * 60 * 60 * 1000
    });

    return token

};