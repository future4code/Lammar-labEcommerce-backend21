import { Request, Response } from "express";
import { connection } from "../connection";
import { character } from "../types";

export async function getAllCharacters(req: Request, res: Response): Promise<void> {
try {
  const {name, orderBy, orderType, page} = req.query;
  //const result: character[] = await connection.raw(`SELECT * FROM character`);
  // res.send(result[0]);


  // page 1 => 0 || page 2 => 5 || page 3 => 10

let  resultsPerPage = 5

const offset = resultsPerPage * (Number(page)-1)

  const characters: character[] = await connection("character")
  .where("name", "LIKE", `%${name}%`)
  .orderBy(orderBy as string|| "name", orderType as string)
  .offset(offset)

  res.send(characters);
} catch (error) {
  res.status(500).send()
}
}
