const db = require("../../data/db-config");

// QUERY => SELECT * FROM ACCOUNTS;
const getAll = () => {
  return db("accounts");
};

// QUERY => SELECT * FROM ACCOUNTS WHERE ID => 1
const getById = (id) => {
  return db("accounts").where("id", id).first();
};

// QUERY => INSERT INTO ACCOUNT => (VALUES) NAME, BUDGET => FOO, 1000
const create = async (account) => {
  const [id] = await db("accounts").insert(account);
  return getById(id);
};

const updateById = (id, account) => {};

// QUERY => DELETE FROM ACCOUNT WHERE ID => 1
const deleteById = (id) => {
  return db("accounts").where("id", id).del();
};

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
};
