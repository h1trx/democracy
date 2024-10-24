import { readFile } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import jwt from "jsonwebtoken";

const SECRET_KEY = "gdjlshhkfnsgsid"

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function leerJson(file) {
    try {
        const filePath = path.join(__dirname, file);
        const data = await readFile(filePath, 'utf8');
        const jsonData = JSON.parse(data);
        if (file == "../db/users.json") return jsonData.usuarios
        if (file == "../db/candidatos.json") return jsonData
    } catch (err) {
        console.error('Error al leer o parsear el archivo:', err);
    }
}

export class Persona {
    constructor () {
        this.db = [];
        this.loadDB('../db/users.json');
    }

    async loadDB () {
        this.db = await leerJson('../db/users.json')
    }

    async all () {
        if (this.db.length === 0) {
            await this.loadDB('../db/users.json');
        }
        return new Promise((resolve, reject) => {
            return resolve(this.db)
        });
    }

    async login (data) {
        const datos = await this.#filterID(data.id) 
        console.log(datos)
        return new Promise ((resolve, reject) => {
            if (datos.pin == data.pin) {
                const token = jwt.sign({ 
                    "id": datos.id,
                    "name": datos.name
                }, SECRET_KEY, { expiresIn: '1h' });
                return resolve({token})
            } else {
                return resolve({message: "No login"})
            }
        })
    }

    async #filterID (id) {
        if (this.db.length === 0) {
            await this.loadDB('../db/users.json');
        }

        return new Promise((resolve, reject) => {
            const data = this.db.filter(usuarios => usuarios.id == id)
            if (data[0]) {
                return resolve(data[0])
            }else {
                return reject("Not found")
            }
        })
    }

    async auth (req) {
        return new Promise ((resolve, reject) => {
            const token = req.headers['auth'];

            if (!token) {
                return reject("token not found")
            }
            jwt.verify(token, SECRET_KEY, (err, decoded) => {
                if (err) { 
                    return reject(err)
                }
                return resolve(decoded['name']);
            });
        })
    }
}   


