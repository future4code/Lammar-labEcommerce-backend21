import { Request, Response } from "express";
import { characters } from "../data";

export function getAllCharacters(req: Request, res: Response): void {
  res.send(characters);
}
