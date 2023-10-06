const mongoose = require('mongoose');

// exports.connectDatabase = () => {
//   mongoose.connect(process.env.MONGO_URI).then((con)=> console.log(`Database Connectd: ${con.connection.host}`)).catch((err) => console.log(err));
// }

exports.connectDatabase = () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then((con) => console.log(`Database Connected: ${con.connection.host}`))
    .catch((err) => {
      console.error('Database Connection Error:', err);
      // Handle the error appropriately, e.g., exit the application
      process.exit(1);
    });
};
