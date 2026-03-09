import { listNumbersOne } from "./mockData.js";

// with disctructering

const [one, two] = listNumbersOne;

const [onee, twoo, ...restOfNumbers] = listNumbersOne;

export function tesrestoffunction() {
  console.log("without restof data");
  console.log([one, two]);
  console.log("with restof data");
  console.log(restOfNumbers);
}
