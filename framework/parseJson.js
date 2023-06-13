module.exports = (req, res) => {
  res.send = (data) => {
    res.writeHead(200, {
      "Content-type": "application/json charset=utf-8",
    });
    res.end(JSON.stringify(data));
  };
};
