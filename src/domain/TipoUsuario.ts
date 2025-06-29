import { randomUUID } from 'crypto';

export type props = {
    id: string;
    nome: string;
    descricao: string;
    ativado?: boolean;
    createdAt?: Date;
    updatedAt?: Date;
    //animes[]
    //mangas[]
}

export default  class TiposUsuarios {
    constructor(private props: props) {}

    public static create(props: Omit<props, 'id'>): TiposUsuarios {
        return new TiposUsuarios({ ...props, id: randomUUID().toString(), createdAt: new Date() });
    }

    public static build(props: props): TiposUsuarios {
        return new TiposUsuarios(props);
    }

    public get id(): string {
        return this.props.id;
    }
    public get nome(): string {
        return this.props.nome;
    }
    public get descricao(): string {
        return this.props.descricao;
    }
    public get ativado(): boolean | undefined {
        return this.props.ativado 
    }
    public get createAt(): Date | undefined {
        return this.props.createdAt!
    }
    public get updateAt(): Date | undefined {
        return this.props.updatedAt!
    }

    
}