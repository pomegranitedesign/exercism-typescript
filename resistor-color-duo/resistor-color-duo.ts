export class ResistorColor {
  public colors: string[] = [];

  constructor(colors: string[]) {
    this.colors = colors;
  }

  value = (): number => {
    // Create an array of all available colors
    const allColors: string[] = [
      "Black",
      "Brown",
      "Red",
      "Orange",
      "Yellow",
      "Green",
      "Blue",
      "Violet",
      "Grey",
      "White"
    ];

    // Create an array to store the indexes of the colors being
    // passed in this.colors
    const indexes: number[] = [];
    for (let i = 0; i < this.colors.length; i++)
      indexes.push(allColors.findIndex(color => color === this.colors[i]));

    return parseInt(indexes.join(""));
  };
}
