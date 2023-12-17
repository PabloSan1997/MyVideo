/* eslint-disable no-mixed-spaces-and-tabs */
import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, OneToOne, JoinColumn } from 'typeorm';
import { Videos } from './Videos';

@Entity()
export class Portada implements PortadaInterface{
    @PrimaryGeneratedColumn('uuid')
    	id_portada: string;

    @Column({length:100})
    	nombre: string;

    @Column({length:200})
    	miniDesc: string;

    @Column({length:5000})
    	url_image: string;

    @CreateDateColumn()
    	createdAt: Date;
   
    @OneToOne(()=>Videos)
    @JoinColumn({name:'videosId'})
    	videos:Videos;
}