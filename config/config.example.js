module.exports = {

    mongodb: {
        dbURI: "mongodb://localhost:27017/crosswordyan21",
        setting: {
            useNewUrlParser:true,
            useUnifiedTopology:true   // to fix deprecation issues
        }
    },
    session: {
        secretString: "may the force be with you"
    }
};