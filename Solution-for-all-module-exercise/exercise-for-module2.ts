function fakeApiCall(id: number): Promise<string> {
  return new Promise((resolve, reject) => {

    const delay = Math.random() * 1000;

    setTimeout(() => {

      // simulate random failure
      if (Math.random() < 0.1) {
        reject(`API call ${id} failed`);
      } else {
        resolve(`API call ${id} success`);
      }

    }, delay);

  });
}

async function sequentialCalls() {

  console.time("Sequential Time");

  for (let i = 1; i <= 100; i++) {

    try {
      const result = await fakeApiCall(i);
      console.log(result);

    } catch (error) {
      console.error(error);
    }

  }

  console.timeEnd("Sequential Time");
}

async function parallelCalls() {

  console.time("Parallel Time");

  const promises: Promise<string>[] = [];

  for (let i = 1; i <= 100; i++) {
    promises.push(fakeApiCall(i));
  }

  try {

    const results = await Promise.all(promises);

    results.forEach(result => console.log(result));

  } catch (error) {

    console.error("One request failed:", error);

  }

  console.timeEnd("Parallel Time");
}

async function main() {

  console.log("Running sequential calls...");
  await sequentialCalls();

  console.log("\nRunning parallel calls...");
  await parallelCalls();

}

main();