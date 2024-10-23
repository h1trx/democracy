import jwt from 'jsonwebtoken';
const SECRET_KEY = "gdjlshhkfnsgsid"

export function verifyToken () {
    return (req, res, next) => {
        const token = req.headers['auth'];

        console.log(token)

        if (!token) {
            res.status(401).send("Unauthorized");
        }
        console.log("paso 1")
        jwt.verify(token, SECRET_KEY, (err, decoded) => {
            if (err) { 
                console.log("nada")
                res.status(401).send(" post Unauthorized");
            }
            console.log("paso 2")
            req.user = decoded;
            next();
        });
    }
};