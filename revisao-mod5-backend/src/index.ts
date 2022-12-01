import app from './app'
import { createCharacter } from './endpoints/createCharacter'
import { deleteCharacter } from './endpoints/deleteCharacter'
import {getAllCharacters} from './endpoints/getAllCharacters'

app.get("/character", getAllCharacters)

app.put("/character", createCharacter)

app.delete("/character/:id", deleteCharacter)

// app.get("/movie/:id/characters",)









// import chalk from "chalk"

// const message = chalk.green("Leo")

// console.log(message);