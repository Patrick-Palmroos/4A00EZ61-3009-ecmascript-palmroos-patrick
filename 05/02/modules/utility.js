export const max = (arr = []) => {
  let largestNum = arr[0];
  arr.map((x) => {
    if (typeof x === "number") {
      if (x > largestNum) {
        largestNum = x;
      }
    } else {
      throw new Error("Not a number");
    }
  });
  return largestNum;
};

export const min = (arr = []) => {
  let smallestNum = arr[0];
  arr.map((x) => {
    if (typeof x === "number") {
      if (x < smallestNum) {
        smallestNum = x;
      }
    } else {
      throw new Error("Not a number");
    }
  });
  return smallestNum;
};

export default function argArr() {
  const args = process.argv.slice(2).map(Number);
  args.map((y) => {
    if (isNaN(y)) {
      throw new Error(`argument ${y} wasnt a number`);
    }
  });
  return args;
}
