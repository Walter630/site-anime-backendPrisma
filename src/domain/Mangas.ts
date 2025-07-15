import { Favorito } from "./Favorito";
import { Generos } from "./Generos";
import User from "./User";

export type MangasProps = {
    id: string;
    title: string;
    description: string;
    image: string;
    createdAt?: Date;
    updatedAt?: Date;
    //userId?: string; // Se necessário, descomente
    adminId?: User; // Se necessário, descomente
    generos?: Generos[]; // Se necessário, descomente
    favoritos?: Favorito[]; // Se necessário, descomente
}

export class Mangas {
    constructor(private props: MangasProps) {}

    public static create(title: string, description: string, image: string, generos: Generos[]): Mangas {
        return new Mangas({
            id: '',
            title,
            description,
            image,
            createdAt: new Date(),
            updatedAt: new Date(),
            generos,
        })
    }

    static build(props: MangasProps) {
        return new Mangas(props);
    }

    get id(): string {
        return this.props.id;
    }
    get title(): string {
        return this.props.title;
    }
    get description(): string {
        return this.props.description;
    }
    get image(): string {
        return this.props.image;
    }
    get createdAt(): Date | undefined {
        return this.props.createdAt;
    }
    get updatedAt(): Date | undefined {
        return this.props.updatedAt;
    }
    get adminId(): User | undefined {
        return this.props.adminId;
    }
    get generos(): Generos[] | undefined {
        return this.props.generos;
    }
    get favoritos(): Favorito[] | undefined {
        return this.props.favoritos;
    }

}