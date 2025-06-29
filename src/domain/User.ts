import { randomUUID } from "crypto";
import TiposUsuario  from "./TipoUsuario";

type UserProps = {
    id: string;
    nome: string;
    email: string;
    password: string;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
    tipo?: TiposUsuario;
    ativado?: boolean
};

export default  class User {
    private constructor(private props: UserProps) {}

    public static create(props: Omit<UserProps, 'id'>): User{
        return new User (
            {
                ...props,
               id: randomUUID().toString(),
               
            }
        )
    }

    public static build(props: UserProps): User {
        return new User(props)
    }

    public get id(): string {
        return this.props.id
    }

    public get nome(): string {
        return this.props.nome
    }

    public get email(): string {
        return this.props.email
    }

    public get password(): string {
        return this.props.password
    }

    public get createdAt(): Date | undefined {
        return this.props.createdAt
    }

    public get updatedAt(): Date | undefined {
        return this.props.updatedAt
    }
    public get tipo(): TiposUsuario | undefined {
        return this.props.tipo
    }
    public get ativado(): boolean | undefined {
        return this.props.ativado
    }

    public get deletedAt():  Date | undefined{
        return this.props.deletedAt
    }

}