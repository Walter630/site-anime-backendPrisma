import  User  from "./User";

export type NotificacaoProps = {
  id: string;
  mensagem: string;
  user: User;
  lida?: boolean;
  createdAt?: Date;
};

export class Notificacao {
  private props: NotificacaoProps;

  private constructor(props: NotificacaoProps) {
    if (!props.mensagem || props.mensagem.trim() === "") {
      throw new Error("A notificação precisa ter uma mensagem.");
    }

    this.props = {
      ...props,
      lida: props.lida ?? false,
      createdAt: props.createdAt ?? new Date()
    };
  }

  public static create(props: NotificacaoProps): Notificacao {
    return new Notificacao(props);
  }

  get id(): string {
    return this.props.id;
  }

  get mensagem(): string {
    return this.props.mensagem;
  }

  get user(): User {
    return this.props.user;
  }

  get lida(): boolean {
    return this.props.lida!;
  }

  get createdAt(): Date {
    return this.props.createdAt!;
  }

  marcarComoLida() {
    this.props.lida = true;
  }
}
