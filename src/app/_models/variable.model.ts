export class VariableModel {
  rank: number;
  dimensions: [number];
  values: [number];
  output : Array<string>;

  parse(data) {
    this.rank = data.rank;
    this.dimensions = data.dimensions;
    this.output = new Array<string>();
    this.values = data.values;
    var length = 1;
    var counting : Array<number>;
    counting = new Array<number>();

    for (var i = 0; i < this.rank; ++i) {
      length *= this.dimensions[i];
      counting.push(1);
    }

    for (var i = 0; i < length; ++i) {
      var temp = "";

      for (var x = 0; x < this.rank; ++x) {
        temp = "[" + counting[x] + "]" + temp;
      }

      counting[0] += 1;
      for (var x = 0; x < this.rank; ++x) {
        if (counting[x] > this.dimensions[x]) {
          counting[x] = 1;
          counting[x + 1] += 1;
          console.log(counting);
        }
      }


      temp = temp + `=${this.values[i]}`;
      this.output.push(temp);
    }
  }
}
