const mongoose = require('mongoose');

exports.dbConn = () => {

    mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        .then((result) => {
            console.log("Database Connected");
        })
        .catch((err) => console.log(err));
}