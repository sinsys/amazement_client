// Utilities for the Maze

// Create a random maze with x width and y height
const createMazeObj = (x, y) => {
  // Setup base variables
  // Total Cells (width x height)
  let cellCount = x * y;
  // Setup base array for all cells
  let cells = [];
  // Setup an array to track visited cells
  let unvisitedCells = [];

  // Loop for our rows
  for ( let row = 0; row < y; row++ ) {
    // Insert an array for every row
    cells[row] = [];
    // Copy for our unvisited cells
    unvisitedCells[row] = [];
    for ( let column = 0; column < x; column++ ) {
      // Insert a cell for every column
      // Array consists of top, right, middle, bottom. Mark all as closed.
      cells[row][column] = [0, 0, 0, 0];
      // Mark all cells as unvisited
      unvisitedCells[row][column] = true;
    };
  };

  // Establish a random starting position
  let currentCell = [
    Math.floor( Math.random() * y ), // Row
    Math.floor( Math.random() * x ) // Column
  ];
  // Setting up a path array to track where we've been
  let path = [currentCell]; // [row, column]

  // Set the current random cell to visited
  unvisitedCells[ currentCell[0] ][ currentCell[1] ] = false;

  // Set a baseline for how many cells have been visited;
  let visited = 1;

  // Loop through every available cell until every cell has been visited
  while ( visited < cellCount ) {
    // Gather cell neighbors
    let neighbors = [
      // Format: [ row, column, cell border primary, cell border opposite ]
      [currentCell[0]-1, currentCell[1], 0, 2], // Cell above
      [currentCell[0], currentCell[1]+1, 1, 3], // Cell to the right
      [currentCell[0]+1, currentCell[1], 2, 0], // Cell below 
      [currentCell[0], currentCell[1]-1, 3, 1]  // Cell to the left
    ];

    // Setup an array to place our valid movement options in
    let validCells = [];

    // Determine if each neighboring cell is in game grid, and whether it has already been visited
    for (var cell = 0; cell < 4; cell++) {
      if (
        neighbors[cell][0] > -1 && // Ensure neighbor is not above the bounds
        neighbors[cell][0] < y &&  // Ensure neighbor is not to the right of bounds
        neighbors[cell][1] > -1 && // Ensure neighbor is not below bounds
        neighbors[cell][1] < x &&  // Ensure neighbor is not to the left of bounds
        unvisitedCells
          [ neighbors[cell][0] ]
          [ neighbors[cell][1] ]   // Ensure neighbor has not been visited
      ) { validCells.push(neighbors[cell]) };// If all checks out, add as a valid cell}
    };

    // If we found any valid cells
    if (validCells.length) {
      // Choose one of the valid cells at random
      let nextCell = validCells[ Math.floor( Math.random() * validCells.length) ];
        
      // Remove the borders between the current cell and the chosen valid cell
      cells[ currentCell[0] ][ currentCell[1] ][ nextCell[2] ] = 1;
      cells[ nextCell[0] ][ nextCell[1] ][ nextCell[3] ] = 1;
      
      // Mark the valid cell as visited, 
      unvisitedCells[ nextCell[0] ][ nextCell[1] ] = false;
      // Increase our visited count
      visited++;
      // Set the valid cell as the current cell
      currentCell = [ nextCell[0], nextCell[1] ];
      // Add the valid cell to our path
      path.push(currentCell);
    }
    // No valid cells were found. Let's try again
    else {
      currentCell = path.pop();
    }    
  }
  // Visited cells equals our total cells. Everything checked. Return our object
  return cells;
};

  // Check if a move is valid
const validMove = (cell, direction) => {
  switch (direction) {
    case 'up':
      return cell[0] ? true : false;
    case 'right':
      return cell[1] ? true : false;
    case 'down':
      return cell[2] ? true : false;
    case 'left':
      return cell[3] ? true : false;
    default:
      return false;
  };
};

// Check if user won the game
const checkWin = (playerPos, winPos) => {
  return (playerPos[0] === winPos[0] && playerPos[1] === winPos[1]) ? true : false;
};

// Draw the maze on canvas
const drawMaze = (maze, scale, ctx, canvas) => {
  // Set the background
  ctx.fillStyle = "#131313";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.lineWidth = 6;

  // Insert trophy on win cell
  let trophyImg = new Image();
  trophyImg.src = require('../assets/images/trophy.svg');
  trophyImg.onload = () => {
    ctx.globalAlpha = 1;
    ctx.drawImage(trophyImg, scale * maze[0].length - scale, scale * maze.length - scale, scale, scale);
  };

  // Map over our maze and draw our boundaries
  maze.forEach((row, y) => {
    row.forEach((cell, x) => {
      cell.forEach((edge, e) => {
        // $primary: #5D98E8;
        // $secondary: #FFFB87;
        // $success: #82E82E;
        // $error: #EB5550;
        ctx.strokeStyle = "#9ED466";
        ctx.beginPath();
        if ( !edge ){
          switch (e) {
            case 0:
              ctx.moveTo(x * scale - 2.5, y * scale);
              ctx.lineTo(x * scale + scale + 2.5, y * scale);
              ctx.stroke();
            break;
            case 1:
              ctx.moveTo(x * scale + scale, y * scale - 2.5);
              ctx.lineTo(x * scale + scale, y * scale + scale + 2.5);
              ctx.stroke();
            break;
            case 2:
              ctx.moveTo(x * scale - 2.5, y * scale + scale);
              ctx.lineTo(x * scale + scale + 2.5, y * scale + scale);
              ctx.stroke();
            break;
            case 3:
              ctx.moveTo(x * scale, y * scale - 2.5);
              ctx.lineTo(x * scale, y * scale + scale + 2.5);
              ctx.stroke();
            break;
            default: return;
          }
        }
      });
    });
  });
};

const markPathVisited = (row, col, scale, ctx) => {
  ctx.globalAlpha = 0.25;
  ctx.fillStyle = "#5D98E8"
  ctx.fillRect(scale * col, scale * row, scale, scale);
};

module.exports = {
  createMazeObj,
  validMove,
  checkWin,
  drawMaze,
  markPathVisited
};