const db = require("../../data/db-config");

const getAll = () => {
  // QUERY => SELECT * FROM ACCOUNTS;
  return db("accounts");
};

const getById = (id) => {
  // QUERY => SELECT * FROM ACCOUNTS WHERE ID => 1
  return db("accounts").where("id", id).first();
};

const create = (account) => {
  // DO YOUR MAGIC
};

const updateById = (id, account) => {
  // DO YOUR MAGIC
};

const deleteById = (id) => {
  // DO YOUR MAGIC
};

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
};
