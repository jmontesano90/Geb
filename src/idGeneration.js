export default function idGeneration() {
  let idArray = [];
  let i = 0;
  for (i = 0; i < 10; i++) {
    idArray.push(Math.floor(Math.random() * 9));
  }
  return idArray.join('');
}
