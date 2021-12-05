const fs = require('fs')

try {
  const data = fs.readFileSync('./input', 'utf8');
  const splitData = data.split('\n');
  let totalNumberIncreases = 0;

  for (let i = 0; i < splitData.length - 2; i++) {
    if (i === 0) {
      const num1 = Number(splitData[i]);
      const num2 = Number(splitData[i + 1]);
      const num3 = Number(splitData[i + 2]);
      const curSum = num1 + num2 + num3;
      console.log(`${curSum} (N/A - no previous sum)`);
    } else {
      const num0 = Number(splitData[i - 1]);
      const num1 = Number(splitData[i]);
      const num2 = Number(splitData[i + 1]);
      const num3 = Number(splitData[i + 2]);
      const prevSum = num0 + num1 + num2;
      const curSum = num1 + num2 + num3;

      console.log('got prevSum ', prevSum, ' got curSum', curSum);


      if (curSum > prevSum) {
        console.log(`${curSum} (increased)`)
        totalNumberIncreases++;
      } else if (curSum < prevSum) {
        console.log(`${curSum} (decreased)`)
      } else {
        console.log(`${curSum} (same)`)
      }
    }
  }

  console.log(`Total number of increases is ${totalNumberIncreases}`);
} catch (err) {
  console.error(err)
}