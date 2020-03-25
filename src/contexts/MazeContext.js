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
  active: false,
  maze: [],
  playerPosition: [],
  winCoords: [],
  difficulty: "",
};

let reducer = (state, action) => {
  switch (action.type) {
    // Logs the user in. Updates state about the user
    case "create-maze":

      let payload = action.payload;
      return {
        ...state,
        scale: payload.scale,
        active: payload.active,
        playerPosition: [0,0],
        winCoords: [payload.size[0],payload.size[1]],
        maze: createMazeObj(payload.size[0], payload.size[1]),
        difficulty: payload.difficulty
      };
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