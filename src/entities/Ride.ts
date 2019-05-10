import { Entity, BaseEntity ,PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn} from "typeorm";
import { rideStatus } from "../../src/types/types";



@Entity()
class Ride extends BaseEntity{

    @PrimaryGeneratedColumn()  
    id:number;

    @Column({type:"enum",enum:["ACCEPTED","FINSHED","CANCELED","REQUESTING","ONROUTE"]})
    status:rideStatus;
    
    @Column({type:"text"})
    pickUpAddress:string;

    @Column({type:"double precision",default:0})
    pickUpLng:number;
    
    @Column({type:"double precision",default:0})
    pickUpLat:number;
    
    @Column({type:"text"})
    dropOffAddress:string;

    @Column({type:"double precision",default:0})
    dropOffLng:number;

    @Column({type:"double precision",default:0})
    dropOffLat:number;

    @Column({type:"double precision",default:0})
    price: number;
    
    @Column({type:"text"})
    duration:string;

    @Column({type:"text"})
    distance:string;

    @CreateDateColumn()
    createAt:string;

    @UpdateDateColumn()
    updateAt:string;

}

export default Ride;