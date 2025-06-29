import { Mangas } from '@prisma/client';
import { Animes } from './Animes';
import { User } from './User';
export type FavoritoProps = {
    id: string;
    user: User;
    anime?: Animes;
    mangas?: Mangas;
}

export class Favorito {
    constructor (private props: FavoritoProps) {}

    public static create(props: FavoritoProps) {
        return new Favorito(props);
    }

    static build(props: FavoritoProps) {
        return new Favorito(props);
    }

    get id(): string{
        return this.props.id;
    }

    get user(): User {
        return this.props.user;
    }
    get anime(): Animes | undefined {
        return this.props.anime;
    }
    get mangas(): Mangas | undefined {
        return this.props.mangas;
    }
}