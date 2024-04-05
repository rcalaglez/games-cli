import figlet from "figlet";
import { ChalkColorizer } from "../utils/ChalkColorizer";

import { IBanner } from "../interfaces/IBanner";

export class FigletBanner implements IBanner {
  private colorizer: ChalkColorizer;

  constructor() {
    this.colorizer = new ChalkColorizer();
  }

  async show(title: string, styleFn?: (text: string) => string): Promise<void> {
    return new Promise((resolve, reject) => {
      figlet(title, (err, data) => {
        if (err) {
          reject(err);
        } else {
          // Aplicar estilo personalizado si se proporciona, de lo contrario, usar un estilo predeterminado
          if (data) {
            const styledText = styleFn
              ? styleFn(data)
              : this.colorizer.green(data);
            console.log(styledText);
          }
          resolve();
        }
      });
    });
  }
}
