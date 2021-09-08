import { Get, Post, Body, Route, Tags, Path } from "tsoa";

interface PingResponse {
  message: string;
}
interface PingRequest {
  request: string;
}

@Route("ping")
@Tags("Ping")
export default class PingController {
  @Get("/")
  public async getMessage(): Promise<PingResponse> {
    return {
      message: "pong",
    };
  }

  @Post("/")
  public async postMessage(@Body() body: PingRequest): Promise<any> {
    return {
      message: body.request,
    };
  }

  @Get("/:test")
  public async getParam(@Path() test: string): Promise<PingResponse | null> {
    return {
      message: test,
    };
  }
}

// import { Request, Response, NextFunction } from 'express';

// interface PingResponse {
//   message: string;
// }
// interface PingRequest {
//   request: string;
// }

// // getting all posts
// const getMessage = async (req: Request, res: Response, next: NextFunction) => {
//   // get some posts
//   return {
//     message: "pong",
//   };
// };

// // getting a single post
// const postMessage = async (req: Request, res: Response, next: NextFunction) => {
//   // get the post id from the req
//   let body: string = req.body.body;
//   return res.status(200).json({
//     message: body
//   });
// };

// // adding a post
// const getParam = async (req: Request, res: Response, next: NextFunction) => {
//   // get the data from req.body
//   console.log('PARAM: ', req.params.test)
//   let body: string = req.params.test;
//   // return response
//   return res.status(200).json({
//     message: body
//   });
// };

// export default { getMessage, postMessage, getParam };