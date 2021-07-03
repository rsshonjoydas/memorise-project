// ? external imports
const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')

// ? internal imports
// const postsRouter = require("./routers/postsRouter")



const app = express();
dotenv.config();
const PORT =  process.env.PORT || 5000;

// ? request parser
app.use(bodyParser.json({limit: "30mb", extended: true}))
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}))
app.use(cors())
// app.use(express.json());
// app.use(express.urlencoded({extended: true}))

// TODO: mongodb database connection with mongoose
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.lobn7.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log('database connection successful!'))
.catch(err => console.log(err))


// ! set view engine
// app.set("view engine", "ejs")

// ! set static folder
// app.use(express.static(path.join(__dirname, "public")))

//  ! pares cookie
// app.use(cookieParser(process.env.COOKIE_SECRET))

// ! routing setup
// app.use("/posts", postsRouter);
// app.use("/users", usersRouter);
// app.use("/inbox", inboxRouter);

// ! error handling

// ! 404 not found handler
// app.use(notFoundHandler);

// ! common error handler
// app.use(errorHandler);


app.listen(PORT, () => {
  console.log(`app listing to port ${process.env.PORT}`);
})