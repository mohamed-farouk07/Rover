function move(distance, startPosition, currentAngle, obstacles) {
  const angleRad = currentAngle * (Math.PI / 180);
  const x = Math.round(Math.cos(angleRad) * distance);
  const y = Math.round(Math.sin(angleRad) * distance);
  const nextPosition = [startPosition[0] + x, startPosition[1] + y];

  if (!obstacle(nextPosition, obstacles)) {
    startPosition = nextPosition;
  }

  return startPosition;
}

function rotate(angle, currentAngle) {
  currentAngle = (currentAngle + angle) % 360;
  return currentAngle;
}

function obstacle(position, obstacles) {
  for (let i = 0; i < obstacles.length; i++) {
    if (obstacles[i][0] === position[0] && obstacles[i][1] === position[1]) {
      return true;
    }
  }
  return false;
}

function executeCommandString(commandString) {
  const obstacles = [
    [1, 4],
    [3, 5],
    [7, 4],
  ];
  let startPosition = [0, 0];
  let currentAngle = 0;

  for (let i = 0; i < commandString.length; i++) {
    const command = commandString[i];
    if (command === "F") {
      startPosition = move(1, startPosition, currentAngle, obstacles);
    } else if (command === "B") {
      startPosition = move(-1, startPosition, currentAngle, obstacles);
    } else if (command === "L") {
      currentAngle = rotate(-90, currentAngle);
    } else if (command === "R") {
      currentAngle = rotate(90, currentAngle);
    }
  }

  console.log(
    `Current position: (${startPosition[0]}, ${startPosition[1]}) Angle: ${currentAngle}`
  );
}
executeCommandString("FLFFFRFLB");


