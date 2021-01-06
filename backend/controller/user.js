
exports.getUserList = function (req, res) {
    res.json([
        {id: 1, username: "somebody"},
        {id: 2, username: "somebody_else"}
      ]);
};
