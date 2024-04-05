import inquirer from "inquirer";
import { GameInitializer } from "../utils/GameInitializer";
import { InquirerMenu } from "./InquirerMenu";

export class MenuHandler {
  private menu: InquirerMenu;

  constructor() {
    this.menu = new InquirerMenu();
  }

  async showMainMenu() {
    const selection = await this.menu.show([
      { name: "Pokedle", value: "pokedle" },
      { name: "Exit", value: "exit" },
    ]);

    if (selection === "exit") {
      console.log("Goodbye!");
      process.exit(0);
    } else {
      this.handleGameSelection(selection);
    }
  }

  private async handleGameSelection(selection: string) {
    switch (selection) {
      case "pokedle":
        const options = await this.collectPokedleOptions();
        GameInitializer.startPokedle(options);
        break;
      // Añadir más juegos según sea necesario
    }
  }

  private async collectPokedleOptions() {
    const questions = [
      {
        type: "confirm",
        name: "types",
        message: "Would you like to show types?",
        default: false,
      },
      {
        type: "number",
        name: "topGen",
        message: "Limit to top generation (1-8):",
        validate: (input: number) =>
          (input >= 1 && input <= 8) ||
          "Please enter a number between 1 and 8.",
        filter: (input: number) => Number(input), // Asegurar que el input es un número
      },
      {
        type: "confirm",
        name: "firstLetter",
        message: "Show the first letter of the Pokémon name as a clue?",
        default: false,
      },
      {
        type: "confirm",
        name: "number",
        message: "Would you like to show pokedex number?",
        default: false,
      },
      // Puedes añadir más opciones específicas aquí
    ];
    return this.menu.ask(questions);
  }
}
