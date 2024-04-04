import { Colorizer } from "../interfaces/Colorizer";
import chalk from "chalk";

export class ChalkColorizer implements Colorizer {
  green(text: string): string {
    return chalk.green(text);
  }

  bgGreen(text: string): string {
    return chalk.bgGreen(text);
  }

  bgYellow(text: string): string {
    return chalk.bgYellow(text);
  }
}
