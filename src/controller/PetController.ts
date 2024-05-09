import { Request, Response } from "express";
import type TipoPet from "./tipos/TipoPet";

let lista_de_pets: TipoPet[] = [];

export default class PetController {
    criaPet(req: Request, res: Response) {
        const { id, adotado, especie, idade, nome } = req.body as TipoPet;
        const novo_pet: TipoPet = { id, adotado, especie, idade, nome }
        lista_de_pets.push(novo_pet);
        return res.status(201).json(novo_pet);
    }
}