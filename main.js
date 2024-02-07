import express from "express";
import apiRoutes from "./routes/apiRoutes.js";

const app = express();
const PORT = 8080;

// app.get("/", (req, res) => {
//   res.sendFile(root + "/public/index.html");
// });
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/',apiRoutes);
//app.use('/productos',apiRoutes);

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});