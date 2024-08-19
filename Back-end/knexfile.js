module.exports = {
  development: {
    client: "pg",
    connection: {
      host: "127.0.0.1",
      user: "postgres",
      password: "bmw*2212",
      database: "Jordanian-Elections-Project",
    },
    migrations: {
      directory: "./migrations", // مسار المجلد الذي يحتوي على ملفات المايقريشن
    },
    seeds: {
      directory: "./seeds", // مسار المجلد الذي يحتوي على ملفات السييد
    },
  },
};
