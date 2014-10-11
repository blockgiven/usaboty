module.exports = function(robot) {
  return robot.respond(/yo$/i, function(res) {
    return res.send('yo!');
  });
};
