module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'sqlnode',
  define: {
    timestamps: true,
    underscored: true,
  },
};
//created_at, updated_at