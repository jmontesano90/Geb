import idGeneration from './idGeneration';
//this function generates the transects based on user input
export default function transectGeneration(info, templateId) {
  let transectD = [];
  let rangeOfN = [];
  let d = new Date();
  let coords = {
    x: [],
    y: [],
    xPartial: [],
    yPartial: [],
    direction: [],
    partialTransectLength: info.partialTransectLength.value,
    id: templateId,
    dataId: idGeneration(),
    date: d,
  };
  let newRandom;

  info.x.value = parseInt(info.x.value);
  info.y.value = parseInt(info.y.value);
  let totalLength = info.x.value + info.y.value;
  transectD.push(Math.floor(Math.random() * totalLength));
  let i = 0;
  let y = 1;
  for (i = 0; i < info.transectCount.value - 1; i++) {
    newRandom = Math.floor(Math.random() * totalLength);
    for (y = 0; y < info.minimum.value; y++) {
      rangeOfN.push(transectD[i] - y);
      rangeOfN.push(transectD[i] + y);
    }
    let z = 0;
    let checkIfValid = false;
    let secondaryCheck = 0;
    while (checkIfValid === false) {
      if (newRandom === rangeOfN[z]) {
        secondaryCheck += 1;
      }
      if (z + 1 === rangeOfN.length) {
        if (secondaryCheck === 0) {
          transectD.push(newRandom);
          checkIfValid = true;
        } else {
          newRandom = Math.floor(Math.random() * totalLength);
          z = 0;
          secondaryCheck = 0;
        }
      }
      z += 1;
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
