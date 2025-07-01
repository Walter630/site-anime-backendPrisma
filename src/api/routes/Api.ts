import express, { Application, RequestHandler } from "express";

export class Api {
    public readonly app: Application;

    constructor() {
        this.app = express();
        this.app.use(express.json());
    }

    public addRotas(caminho: string, metodo: string, handler: RequestHandler) {
        (this.app as any)[metodo.toLowerCase()](caminho, handler);
    }
    public start(port: number) {
        this.app.listen(port, () => {
            console.log(`API is running on port ${port}`);
        });
    }
}