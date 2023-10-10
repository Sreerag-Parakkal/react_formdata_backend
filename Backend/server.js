const app = require('./app')
const dotenv = require("dotenv");
const databaseConnection = require('./config/databaseConnection')

databaseConnection();

const userRoutes = require("./routes/userSignup");

app.use('/api/v1', userRoutes);

app.listen(process.env.PORT, ()=>{
    console.log(`Server Running on port ${process.env.PORT}`);
})