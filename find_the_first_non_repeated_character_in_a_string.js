function findFirstNonRepeatedCharacter(str) {
    const charCounts = new Map();
    
    for (const char of str) {
      charCounts.set(char, (charCounts.get(char) || 0) + 1);
    }
  
    for (const char of str) {
      if (charCounts.get(char) === 1) {
        return char;
      }
    }
  
    return null;
  }
  
  const variable = 'Hello World';
  console.log(findFirstNonRepeatedCharacter(variable)); // Output: "H"
  