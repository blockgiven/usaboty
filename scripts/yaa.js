module.exports = function(robot) {
  return robot.respond(/やあ$/i, function(res) {
    return res.send('やあ!');
  });
};
