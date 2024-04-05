import figlet from "figlet";
import { ChalkColorizer } from "../utils/ChalkColorizer";

import { IBanner } from "../interfaces/IBanner";

export class FigletBanner implements IBanner {
  private colorizer: ChalkColorizer;

  constructor() {
    this.colorizer = new ChalkColorizer();
  }

  async show(title: string): Promise<void> {
    return new Promise((resolve, reject) => {
      figlet(title, (err, data) => {
        if (err) {
          reject(err);
        } else {
          const colorizer = new ChalkColorizer();
          if (data) console.log(colorizer.green(data));
          resolve();
        }
      });
    });
  }
}
