import { Animes, Mangas } from "@prisma/client";

export type GenerosProps = {
    id: string;
    nome: string;
    animes?: Animes[];
    mangas?: Mangas[];
}

export class Generos {
    constructor(private props: GenerosProps) {}

    public static create(nome: string, animes: Animes[], mangas: Mangas[]): Generos {
        return new Generos({ id: '', nome, animes, mangas });
    }

    static build(props: GenerosProps): Generos {
        return new Generos(props);
    }

    get id(): string {
        return this.props.id;
    }
    get nome(): string {
        return this.props.nome;
    }
    get animes(): Animes[] | undefined {
        return this.props.animes;
    }
    get mangas(): Mangas[] | undefined {
        return this.props.mangas
    }
}