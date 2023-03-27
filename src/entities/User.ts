import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert, BeforeUpdate } from "typeorm";

@Entity({name:"users"})
export class User {
    // define a chave primária como auto incremento
    @PrimaryGeneratedColumn()
    idSolicitacao: number;

    // @Column({nullable: true, unique:true, default:null})
    // idSolicitacao: number;

    @Column({nullable:false, unique:true, length: 100})
    nomeSolicitacao: string;

    @Column({nullable: false, unique:true, length: 70})
    tipoSolicitacao: string;

    @Column({nullable: true, unique:true, length: 70, default:null})
    solicitante: string;

    @Column({nullable: true, unique:true, default:null})
    verificaSolicitacao: boolean;
    
}
