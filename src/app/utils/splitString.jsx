// Function: Split each character from inputstring and push in character array
function splitString(inputString) {
  const characters = [];
  const regex = /[\s\S]/gu;
  let match;
  
  while ((match = regex.exec(inputString)) !== null) {
    characters.push(match[0]);

  }
  return characters;
}


export default splitString;
