import { IMenu, IMenuOption } from "../interfaces/IMenu";
import inquirer, { QuestionCollection } from "inquirer";

export class InquirerMenu implements IMenu {
  async show(options: IMenuOption[]): Promise<string> {
    const answer = await inquirer.prompt([
      {
        type: "list",
        name: "selection",
        message: "Choose an option:",
        choices: options,
      },
    ]);
    return answer.selection;
  }

  async ask(questions: QuestionCollection<any>) {
    return await inquirer.prompt(questions);
  }
}
