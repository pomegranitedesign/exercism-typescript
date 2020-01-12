class Transcriptor {
  toRna(dna: string) {
    const dnaLength = dna.length;

    // For a single DNA passed
    if (dnaLength === 1) {
      return this.checkAndReplace(dna);
    } else if (dnaLength > 1) {
      const splitted = dna.split("");

      const output = [];
      for (let char of splitted) {
        output.push(this.checkAndReplace(dna));
      }

      return output.join("");
    }
  }

  checkAndReplace(dna: string) {
    switch (dna) {
      case "C":
        return "G";
      case "G":
        return "C";
      case "T":
        return "A";
      case "A":
        return "U";
    }
  }
}

export default Transcriptor;
