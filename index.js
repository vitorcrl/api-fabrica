import express from "express";
const app = express();
const port = 3333;

app.use(express.json());

app.get("/", (req, res) => {
    res.send({ message: "Hello World" });
});

app.listen(port, () => {
    console.log("🚀 Server started on port 3333! Ctrl+C to stop");
});
