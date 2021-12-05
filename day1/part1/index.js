const fs = require('fs')

try {
  const data = fs.readFileSync('./input', 'utf8');
  const splitData = data.split('\n');
  let totalNumberIncreases = 0;

  for (let i = 0; i < splitData.length; i++) {
    if (i === 0) {
      console.log(`${splitData[0]} (N/A - no previous measurement)`);
    } else {
      const current = Number(splitData[i]);
      const previous = Number(splitData[i - 1]);

      if (current > previous) {
        console.log(`${splitData[i]} (increased)`)
        totalNumberIncreases++;
      } else if (current < previous) {
        console.log(`${splitData[i]} (decreased)`)
      } else {
        console.log(`${splitData[i]} (same)`)
      }
    }
  }

  console.log(`Total number of increases is ${totalNumberIncreases}`);
} catch (err) {
  console.error(err)
}