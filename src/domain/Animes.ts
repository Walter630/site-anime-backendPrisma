import { randomUUID } from "crypto";

export type AnimesProps = {
    id: string,
    title: string,
    image: string,
    description: string,
    episodios: number,
    dataCreateAt: Date,
    dataUpdateAt: Date,
    adminId?: string,
    userId?: string,

    // generos: Generos[]
    // favoritos: Favoritos[]
    // comentarios: Comentarios[]
}

export class Animes {
    constructor(private props: AnimesProps) {}

    public static create(title: string, image: string, description: string, episodios: number): Animes {
        return new Animes({ id: randomUUID().toString(), title, image, description, episodios, dataCreateAt: new Date(),dataUpdateAt: new Date(), adminId: undefined, userId: undefined });
        }

    static build(props: AnimesProps) {
        return new Animes(props);
    }

    get id(): string {
        return this.props.id;
    }
    get title(): string {
        return this.props.title;
    }
    get image(): string {
        return this.props.image;
    }
    get description(): string {
        return this.props.description;
    }
    get episodios(): number {
        return this.props.episodios;
    }
    get dataCreateAt(): Date {
        return this.props.dataCreateAt;
    }
    get dataUpdateAt(): Date {
        return this.props.dataUpdateAt;
    }
    get userId(): string | undefined {
        return this.props.userId;
    }
    get adminId(): string | undefined {
        return this.props.adminId
    } 
    
}