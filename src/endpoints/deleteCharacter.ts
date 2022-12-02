import { Request, Response } from "express";
import { connection } from "../connection";
// import { characters } from "../data";

export async function deleteCharacter(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const { id } = req.params;
    // const index: number = characters.findIndex(
    //   (character) => character.id === Number(id)
    // );
    // if (index > -1) {
    //   characters.splice(index, 1);
    // }
    await connection("character").delete().where({ id });
  } catch (error) {
    res.status(500).end();
  }

  res.status(201).end();
}
