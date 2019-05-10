import { Entity, BaseEntity ,PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn} from "typeorm";

@Entity()
class Place extends BaseEntity{
    
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name: string;

    @Column({type:"double precision",default:0})
    lastLng:number;

    @Column({type:"double precision",default:0})
    lastLnt:number;

    @Column()
    adress: string;

    @Column({type:"boolean",default:false})
    favorite: boolean;

    @CreateDateColumn()
    createAt:string;
    @UpdateDateColumn()
    updateAt:string;

}

export default Place;