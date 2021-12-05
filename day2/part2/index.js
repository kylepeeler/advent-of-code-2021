const fs = require('fs')

try {
  const data = fs.readFileSync('./input', 'utf8');
  const lineData = data.split('\n');

  const commands = lineData.map(line => line.split(' ')[0]);
  const coordinates = lineData.map(line => line.split(' ')[1]);

  let horizontalPosition = 0;
  let depth = 0;
  let aim = 0;

  for (let i = 0; i < commands.length; i++) {
    switch (commands[i]) {
      case 'forward':
        horizontalPosition += Number(coordinates[i]);
        depth += aim * Number(coordinates[i])
        break;
      case 'down':
        aim += Number(coordinates[i]);
        break;
      case 'up':
        aim -= Number(coordinates[i]);
        break;
      default:
        break;
    }
  }

  console.log('got aim as ', aim);
  console.log('got depth as ', depth);
  console.log('got horizontal position as ', horizontalPosition);

  console.log('got puzzle solution as ', depth * horizontalPosition)

} catch (err) {
  console.error(err)
}