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
        return newHighScores.easy.push(score);
      case "medium":
        return newHighScores.medium.push(score);
      case "hard":
        return newHighScores.hard.push(score);
      default: return false;
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