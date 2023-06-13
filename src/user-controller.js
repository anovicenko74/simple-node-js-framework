const users = [
  { id: 1, name: "Kate" },
  { id: 2, name: "Vlad" },
];

const getUser = (req, res) => {
  if (req.params.id) {
    return res.send(users.filter((user) => user.id == req.params.id));
  } else res.send(users);
};

const createUser = (req, res) => {
  const user = req.body;
  users.push(user);
  res.send(users);
};

module.exports = { getUser, createUser };
