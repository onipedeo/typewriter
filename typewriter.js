//Function implementation
const typewriter = (sentence) => {
  let time = 0;
  for (const char of sentence) {
    setTimeout(() => {
      process.stdout.write(char)
    }, time);
    time += 70;
  };
  setTimeout(() => {
    console.log("\n");
  }, (sentence.length * 70));
}

typewriter("I am so happy that I am getting a grasp of what all this is all about");