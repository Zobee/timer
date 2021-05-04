const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');

stdin.on('data', (key) => {

  //Corresponds to ctrl+c
  if (key === '\u0003') {
    console.log("Thanks for using me, ciao!");
    process.exit();
  }

  if (key === "b") {
    console.log("BEEEEP");
  }

  if (!isNaN(Number(key)) && Number(key) > 0) {
    console.log(`Setting timer for ${key} seconds...`);
    setTimeout(() => {
      console.log("BEEEEP");
    }, key * 1000);
  }
});