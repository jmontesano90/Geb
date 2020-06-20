export default function transectGeneration(info, id) {
  let transectD = [];
  let rangeOfN = [];
  let coords = {
    x: [],
    y: [],
    xPartial: [],
    yPartial: [],
    direction: [],
    partialTransectLength: info.partialTransectLength.value,
    id: id,
  };
  let newRandom;

  info.x.value = parseInt(info.x.value);
  info.y.value = parseInt(info.y.value);
  let totalLength = info.x.value + info.y.value;
  // console.log('Total Length is: ' + totalLength);
  transectD.push(Math.floor(Math.random() * totalLength));
  // console.log('Transectd at 0 is: ' + transectD[0]);
  let i = 0;
  let y = 1;
  for (i = 0; i < info.transectCount.value - 1; i++) {
    // console.log('  ');
    // console.log('  ');
    // console.log(transectD);
    // console.log('  ');
    newRandom = Math.floor(Math.random() * totalLength);
    // console.log('New random: ' + newRandom);
    for (y = 0; y < info.minimum.value; y++) {
      rangeOfN.push(transectD[i] - y);
      rangeOfN.push(transectD[i] + y);
    }
    let z = 0;
    let checkIfValid = false;
    let secondaryCheck = 0;
    // console.log('Current random number being checked: ' + newRandom);
    while (checkIfValid === false) {
      if (newRandom === rangeOfN[z]) {
        // console.log('Within unacceptable range, :' + newRandom);
        // console.log('z value' + z);
        secondaryCheck += 1;
      }
      if (z + 1 === rangeOfN.length) {
        if (secondaryCheck === 0) {
          // console.log('Passed checks, adding ' + newRandom);
          transectD.push(newRandom);
          checkIfValid = true;
        } else {
          newRandom = Math.floor(Math.random() * totalLength);
          z = 0;
          secondaryCheck = 0;
          // console.log(
          //   'new random failed checks, rerolling new number as: ' + newRandom
          // );
        }
      }
      z += 1;
      // console.log('Incrementing z');
    }
  }
  let b = 0;
  for (b = 0; b < transectD.length; b++) {
    if (transectD[b] > info.x.value) {
      coords.y.push(transectD[b] - info.x.value);
    } else {
      coords.x.push(transectD[b]);
    }
  }

  if (info.partialTransectCount.value >= 1) {
    for (i = 0; i < info.partialTransectCount.value; i++) {
      coords.xPartial.push(Math.floor(Math.random() * info.x.value));
      coords.yPartial.push(Math.floor(Math.random() * info.y.value));
      coords.direction.push(Math.floor(Math.random() * 3));

      if (coords.xPartial[i] < info.partialTransectLength.value) {
        if (coords.direction[i] === 3) {
          coords.direction[i] = 2;
        }
      }
      if (coords.xPartial[i] > info.x - info.partialTransectLength.value) {
        if (coords.direction[i] === 2) {
          coords.direction[i] = 3;
        }
      }

      if (coords.yPartial[i] < info.partialTransectLength.value) {
        if (coords.direction[i] === 1) {
          coords.direction[i] = 0;
        }
      }

      if (coords.yPartial[i] > info.y - info.partialTransectLength.value) {
        if (coords.direction[i] === 0) {
          coords.direction[i] = 1;
        }
      }
    }
  }

  return coords;
}
