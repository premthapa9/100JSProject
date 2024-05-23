import express from "express";
import { db, connectDB } from "./db.js";

// This is the dummy data we are using
const app = express();
app.use(express.json()); //in order to use the req.body we need it.
// get will have route and callback server get request on server /hello
// app.post("/hello", (req, res) => {
//   // Here we can give other method also like post, put
//   console.log(req.body);
//   res.send(`Hello! ${req.body.name}`);
// });
// // Way to access the url params in express
// app.get("/hello/:name/goodby/:otherurl", (req, res) => {
//   const { name, otherurl } = req.params;
//   res.send(`Hello your name is ${name} you can call me ${otherurl}`);
// });

app.get("/api/articles/:name", async (req, res) => {
  const { name } = req.params;

  const article = await db.collection("learn").findOne({ name });
  if (article) {
    res.json(article); // Note it can be send or .json also
  } else {
    res.sendStatus(404); // This will send 404
  }
});

// upvote endpoint
app.put("/api/articles/:name/upvote", async (req, res) => {
  const { name } = req.params;

  await db.collection("learn").updateOne({ name }, { $inc: { upvote: 1 } });

  const article = await db.collection("learn").findOne({ name });

  if (article) {
    res.send(`The ${name} article now has ${article.upvote} votes!!!`);
  } else {
    res.send(`The article doesn't exists`);
  }
});

app.post("/api/articles/:name/comments", async (req, res) => {
  const { name } = req.params;
  const { postedBy, text } = req.body;

  await db.collection("learn").updateOne(
    { name },
    {
      $push: { comments: { postedBy, text } },
    }
  );

  const article = await db.collection("learn").findOne({ name });

  if (article) {
    res.send(article.comments);
  } else {
    res.send(`The article doesn't exists`);
  }
});

// Tell our server to listen
connectDB(() => {
  console.log("Connected to DB successfully");
  app.listen(8000, () => {
    console.log("Server is listening on port 8000");
  });
});
