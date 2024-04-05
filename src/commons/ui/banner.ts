import figlet from "figlet";
import { ChalkColorizer } from "../utils/ChalkColorizer";

export const showBanner = (title: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    figlet(title, (err, data: string | undefined) => {
      if (err) {
        console.error("Something went wrong with the banner generation...");
        console.error(err);
        reject(err);
        return;
      }

      const colorizer = new ChalkColorizer();
      if (data) console.log(colorizer.green(data));

      resolve();
    });
  });
};
