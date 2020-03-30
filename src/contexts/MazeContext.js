// Context for our Maze
import React, {
  createContext,
  useReducer
} from "react";

// Utilities / Helpers
import { createMazeObj, checkWin } from 'utils/maze-utility';

// Create our context
let MazeContext = createContext();

// Set default values
let initialState = {
  scale: 0,
  size: 10,
  active: false,
  maze: [],
  playerPosition: [],
  mazePosition: [0,0],
  winCoords: [],
  difficulty: "",
  spritePosition: [0,0],
  activeCell: [],
  won: false,
  playerPath: [[0,0]]
};

// Reducer to set specific state update commands
let reducer = (state, action) => {
  let payload = action.payload;
  switch (action.type) {
    // Logs the user in. Updates state about the user
    case "create-maze":
      /* Expects payload of: {
        active: true,
        scale: float,
        size: int,
        mazePosition: [x, y] coordinates in px for maze to offset maze display to 0, 0
        difficulty: string,
        maze_id: uuid() */
      return {
        ...state,
        scale: payload.scale,
        active: payload.active,
        size: payload.size,
        playerPosition: [0,0], // [Row, Column]
        mazePosition: [payload.mazePosition[0], payload.mazePosition[1]], // [x, y]
        winCoords: [payload.size - 1, payload.size - 1],
        maze: createMazeObj(payload.size, payload.size),
        difficulty: payload.difficulty,
        spritePosition: [payload.mazePosition[0]-(payload.scale / 2), payload.mazePosition[1] - (payload.scale / 2)],
        uuid: payload.uuid,
        won: false
      };
    case "set-active-cell":
      return {
        ...state,
        activeCell: state.maze[state.playerPosition[0]][state.playerPosition[1]]
      };
    case "start-timer":
      return {
        ...state,
        timeStart: new Date()
      }
    case "end-game":
      return {
        ...state,
        active: false,
        timeEnd: new Date()
      }
    case "move-up":
      return {
        ...state,
        playerPosition: [state.playerPosition[0] - 1, state.playerPosition[1]],
        mazePosition: [state.mazePosition[0], state.mazePosition[1] + state.scale],
        won: checkWin(
          [ state.playerPosition[0] - 1, state.playerPosition[1] ],
          state.winCoords
        ),
        playerPath: [...state.playerPath, [state.playerPosition[0] , state.playerPosition[1] ] ]
      };
    case "move-right":
      return {
        ...state,
        playerPosition: [state.playerPosition[0], state.playerPosition[1] + 1],
        mazePosition: [state.mazePosition[0] - state.scale, state.mazePosition[1]],
        won: checkWin(
          [ state.playerPosition[0], state.playerPosition[1] + 1 ],
          state.winCoords
        ),
        playerPath: [...state.playerPath, [state.playerPosition[0], state.playerPosition[1] ] ]
      };
    case "move-down":
      return {
        ...state,
        playerPosition: [state.playerPosition[0] + 1, state.playerPosition[1]],
        mazePosition: [state.mazePosition[0], state.mazePosition[1] - state.scale],
        won: checkWin(
          [ state.playerPosition[0] + 1, state.playerPosition[1] ],
          state.winCoords
        ),
        playerPath: [...state.playerPath, [state.playerPosition[0], state.playerPosition[1] ] ]
      }
    case "move-left":
      return {
        ...state,
        playerPosition: [state.playerPosition[0], state.playerPosition[1] - 1],
        mazePosition: [state.mazePosition[0] + state.scale, state.mazePosition[1]],
        won: checkWin(
          [ state.playerPosition[0], state.playerPosition[1] - 1 ],
          state.winCoords
        ),
        playerPath: [...state.playerPath, [state.playerPosition[0], state.playerPosition[1] ] ]
      }
    default:
      return initialState
  }
};

const MazeContextProvider = (props) => {
  let [state, dispatch] = useReducer(reducer, initialState);
  let value = { state, dispatch };
  return (
    <MazeContext.Provider value={value}>
      {props.children}
    </MazeContext.Provider>
  );
};

let MazeContextConsumer = MazeContext.Consumer;

export { MazeContext, MazeContextProvider, MazeContextConsumer };