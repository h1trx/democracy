import fs from 'fs/promises'
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import { leerJson } from './user.service.js';

async function votar(position, personId) {
    try {
        const filePath = path.join(__dirname, '../db/candidatos.json');
        const data = await fs.readFile(filePath, 'utf8');
        const jsonData = JSON.parse(data);

        if (!jsonData[position]) {
            console.log(`La posición '${position}' no se encuentra en el archivo.`);
            return;
        }

        const person = jsonData[position].find(p => p.id === personId);
        if (person) {
            person.votos += 1;
            await fs.writeFile(filePath, JSON.stringify(jsonData, null, 2));
            console.log(`Votos de ${person.nombre} actualizados a ${person.votos}.`);
        } else {
            console.log('Persona no encontrada.');
        }
    } catch (err) {
        console.error('Error al leer o parsear el archivo:', err);
    }
}

export class Vote {
    constructor () {
        this.db = []
        this.loadDB('../db/candidatos.json')
    }

    async loadDB () {
        this.db = await leerJson('../db/candidatos.json')
    }

    async all () {
        if (this.db.length === 0) {
            await this.loadDB('../db/candidatos.json');
        }
        return new Promise (resolve => {
            return resolve(this.db)
        })
    }

    async personero (voto) {
        return new Promise (resolve => {
            votar('personeria', voto)
            return resolve({message: "Ok"})
        })
    }

    async contralor (voto) {
        return new Promise (resolve => {
            votar('contraloria', voto)
            return resolve({message: "Ok"})
        })
    }
}
