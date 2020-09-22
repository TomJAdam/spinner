// *** Spinner 2 ***

const load = ['\r|', '\r/', '\r-', '\r\\', '\r|', '\r/', '\r-', '\r\\', '\r|'];

const loadTwo = ['\r🕛', '\r🕑', '\r🕒', '\r🕓', '\r🕓', '\r🕔', '\r🕕', '\r🕖', '\r🕗', '\r🕘', '\r🕙', '\r🕚', '\r🕛'];

for (let i = 0; i < loadTwo.length; i++) {
  setTimeout(() => {
    process.stdout.write(loadTwo[i]);
    if (i === loadTwo.length - 1){
      console.log();
    }
  }, i * 200)
} 

