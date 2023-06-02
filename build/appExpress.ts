import express from "express";
import path from "path";
const root = path.join(__dirname, ".."); //
console.log(root);
const rootPublic = path.join(root, "dist"); //
console.log(rootPublic);

const app = express();
// DB 연결

app.use(express.static(root)); //root 디렉토리
app.use(express.static(rootPublic)); //root의 하위 디렉토리는 첫번째만 접근 가능하기 때문에 별도로 지정.

app.get("/", (req, res) => {
  res.sendFile(`index.html`, { root: root });
});

app.use((req, res) => {
  res.status(404).send("not found");
});

app.listen(2080, () => {
  console.log("connected");
});
