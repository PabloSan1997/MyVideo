/* eslint-disable no-mixed-spaces-and-tabs */
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Usuario implements UsuarioInterface {
    @PrimaryGeneratedColumn('uuid')
    	id_usuario: string;

    @Column({ length: 100 })
    	name: string;

    @Column({ length: 5000 })
    	url_image: string;

    @Column({unique:true})
    	userName: string;
    
    @Column({ length: 5000 })
    	password: string;

    @Column({ length: 10 })
    	rol: string;

}