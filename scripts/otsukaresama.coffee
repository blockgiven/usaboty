# original: https://twitter.com/naoya_ito/status/522265459517706241
module.exports = (robot) ->
  robot.hear /^お疲れ様です/, (msg) ->
    msg.send "出、出た〜 IRCなのに冒頭お疲れ様で始め奴www"
