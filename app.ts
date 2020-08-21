import * as express from "express";
import {Request,Response,NextFunction} from "express";

const app = express();

app.get('/', (req: Request, res: Response ) => {
  res.send('Hello')
})

app.listen(3000, () => console.log("server running on :3000"));
