import { timeEnd } from "console";
import { readFileSync } from "fs";
import { readFile } from "fs/promises";
export function blocking() {
  console.time("blocking");
  const data1 = readFileSync("file1.txt");
  console.log("File 1 done");
  const data2 = readFileSync("file2.txt");
  console.log("File 2 done");
  const data3 = readFileSync("file3.txt");
  console.log("File 3 done");
  console.timeEnd("blocking"); // Output: blocking: 300.245ms
}
export async function Nonblocking() {
  console.time("blocking");
  const promise1 = readFile("file1.txt");
  const promise2 = readFile("file2.txt");
  const promise3 = readFile("file3.txt"); // Wait for all to complete
  const [data1, data2, data3] = await Promise.all([
    promise1,
    promise2,
    promise3,
  ]);
  console.log("All files done");
  console.timeEnd('non-blocking'); // Output: non-blocking: 105.123ms

}
