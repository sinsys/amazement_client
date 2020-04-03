// Utilities to format the high scores

const formatHighScores = (highScores) => {
  let newHighScores = {
    easy: [],
    medium: [],
    hard: [],
    top: []
  };
  highScores.sort((a, b) => {
    return (a.time_taken - b.time_taken);
  }).map(score => {
    switch(score.difficulty) {
      case "easy":
        newHighScores.easy.push(score);
        break;
      case "medium":
        newHighScores.medium.push(score);
        break;
      case "hard":
        newHighScores.hard.push(score);
        break;
      default: return;
    }
  });

  newHighScores.top.push(newHighScores.easy[0] || {});
  newHighScores.top.push(newHighScores.medium[0] || {});
  newHighScores.top.push(newHighScores.hard[0] || {});
  
  return newHighScores;
}


module.exports = {
  formatHighScores
};