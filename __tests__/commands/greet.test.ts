import { execSync } from "child_process";

describe("greet command", () => {
  it("should print the correct greeting message", () => {
    const output = execSync("ts-node src/index.ts greet").toString();
    expect(output.trim()).toEqual("Hello from your CLI!");
  });
});
