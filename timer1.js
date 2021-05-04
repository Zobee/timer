//process.stdout.write('\x07'); Not working for me
let args = process.argv.slice(2)

const timer = (times) => {
  //If no input, end
  if(times.length === 0){
    return;
  }
  for(time of times) {
    //If negative, or a non-digit, ignore
    if(!isNaN(Number(time)) && Number(time) >= 0){
      setTimeout(() => {
        console.log("BEEEEP")
      }, time)
    }
  }
}

timer(args)