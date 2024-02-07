import path from "path";
const root = path.resolve();

export class apiController{
  constructor(){}

  getIndexPage(req, res){
    res.sendFile(root + '/public/index.html');
  }

  postForm(req, res) {
    console.log(req.body)
    res.json(req.body);
  }
}