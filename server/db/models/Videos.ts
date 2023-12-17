/* eslint-disable no-mixed-spaces-and-tabs */
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Portada } from './Portada';

@Entity()
export class Videos implements LosVideosInteface {
    @PrimaryGeneratedColumn('uuid')
    	id_video: string;

    @Column({ length: 3000 })
    	descripcion: string;

    @Column({ length: 5000 })
    	url_video: string;

    @OneToOne(() => Portada, (portada) => portada.videos)
    	portada: Portada;
}