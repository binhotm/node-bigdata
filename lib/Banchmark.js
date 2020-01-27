function benchmark(method) {
  var start = +(new Date);

  method && method(function (callback) {
    var end = +(new Date);
    var difference = end - start;
    callback && callback(start, end, {
      milliseconds: difference,
      ms: difference,
      seconds: (difference / 1000) % 60,
      minutes: (difference / (1000 * 60)) % 60,
      hours: (difference / (1000 * 60 * 60)) % 24
    });
  });
}

module.exports = benchmark;
