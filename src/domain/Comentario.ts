import User from "./User";
import { Animes } from "./Animes";

export type ComentarioProps = {
  id: string;
  texto: string;
  user: User;
  anime?: Animes;
  createdAt?: Date;
};


export class Comentario {
  private props: ComentarioProps;

  private constructor(props: ComentarioProps) {
    if (!props.texto || props.texto.trim() === "") {
      throw new Error("O comentário não pode estar vazio.");
    }

    this.props = {
      ...props,
      createdAt: props.createdAt ?? new Date(), // usa data atual se não for passada
    };
  }

  public static create(props: ComentarioProps): Comentario {
    return new Comentario(props);
  }

  get id(): string {
    return this.props.id;
  }

  get texto(): string {
    return this.props.texto;
  }

  get user(): User {
    return this.props.user;
  }

  get anime(): Animes | undefined {
    return this.props.anime;
  }

  get createdAt(): Date {
    return this.props.createdAt!;
  }
}
