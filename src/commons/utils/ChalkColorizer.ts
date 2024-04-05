import { Colorizer } from "../interfaces/Colorizer";
import chalk from "chalk";

export class ChalkColorizer implements Colorizer {
  private applyStyle(style: Function, text: string): string {
    return style(text);
  }

  yellowTextWithBlueBg(text: string): string {
    return chalk.bgHex("3B4CCA").hex("FFDE00")(text);
  }

  green(text: string): string {
    return this.applyStyle(chalk.green, text);
  }

  bgGreen(text: string): string {
    return this.applyStyle(chalk.bgGreen, text);
  }

  bgYellow(text: string): string {
    return this.applyStyle(chalk.bgYellow, text);
  }

  // Ejemplo de uso de hex y rgb
  hex(color: string, text: string): string {
    return this.applyStyle(chalk.hex(color), text);
  }

  rgb(r: number, g: number, b: number, text: string): string {
    return this.applyStyle(chalk.rgb(r, g, b), text);
  }

  // Ejemplo de combinación de estilos
  combine(styles: Function[], text: string): string {
    return styles.reduce((currentText, style) => style(currentText), text);
  }
}
