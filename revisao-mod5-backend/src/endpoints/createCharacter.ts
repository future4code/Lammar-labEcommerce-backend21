import { Request, Response } from "express";
import { connection } from "../connection";
// import { characters } from "../data";

export async function createCharacter(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const { name, gender, description } = req.body;

    // characters.push({
    //   id: Date.now(),
    //   name,
    //   gender,
    //   description
    // });

    await connection("character").insert({ name, gender, description });
  } catch (error) {
    res.status(500).end("Unexpected server error");
  }

  res.status(201).end();
}
