// Context for our Maze
import React, {
  createContext,
  useReducer
} from "react";

// Utilities / Helpers
import { createMazeObj } from 'utils/maze-utility';

let MazeContext = createContext();

let initialState = {
  scale: 0,
  size: 15,
  active: false,
  maze: [],
  playerPosition: [],
  mazePosition: [0,0],
  winCoords: [],
  difficulty: "",
  spritePosition: [0,0],
  activeCell: []
};

let reducer = (state, action) => {
  let payload = action.payload;
  switch (action.type) {
    // Logs the user in. Updates state about the user
    case "create-maze":
      /* Expects payload of: {
        size: int,
        active: bool,
        difficulty: string
      } */
      return {
        ...state,
        scale: payload.scale,
        active: payload.active,
        size: payload.size,
        playerPosition: [0,0], // [Row, Column]
        mazePosition: [payload.mazePosition[0], payload.mazePosition[1]], // [x, y]
        winCoords: [payload.size, payload.size],
        maze: createMazeObj(payload.size, payload.size),
        difficulty: payload.difficulty,
        spritePosition: [payload.mazePosition[0]-(payload.scale / 2), payload.mazePosition[1] - (payload.scale / 2)]
      };
    case "set-active-cell":
      return {
        ...state,
        activeCell: state.maze[state.playerPosition[0]][state.playerPosition[1]]
      }
    case "move-up":
      return {
        ...state,
        playerPosition: [state.playerPosition[0]-1, state.playerPosition[1]],
        mazePosition: [state.mazePosition[0], state.mazePosition[1] + state.scale]
      };
    case "move-right":
      return {
        ...state,
        playerPosition: [state.playerPosition[0], state.playerPosition[1]+1],
        mazePosition: [state.mazePosition[0] - state.scale, state.mazePosition[1]]
      };
    case "move-down":
      return {
        ...state,
        playerPosition: [state.playerPosition[0]+1, state.playerPosition[1]],
        mazePosition: [state.mazePosition[0], state.mazePosition[1] - state.scale]
      }
    case "move-left":
      return {
        ...state,
        playerPosition: [state.playerPosition[0], state.playerPosition[1]-1],
        mazePosition: [state.mazePosition[0] + state.scale, state.mazePosition[1]]
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