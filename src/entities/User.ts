import { IsEmail} from "class-validator";
import { Entity, BaseEntity ,PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn} from "typeorm";

@Entity()
class user extends BaseEntity{
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type:"varchar",unique:true})
    @IsEmail()
    email: string;

    @Column({type:"boolean", default: false})
    verifiedEmail: boolean;

    @Column({type:"text"})
    firstName: string;

    @Column({type:"text"})
    lastName: string;

    get fullName(): string{
        return `${this.firstName}${this.lastName}`
    }

    @Column({type:"int"})
    age:number;

    @Column({type:"text"})
    password:string;

    @Column({type:"text"})
    phoneNumber:string;

    @Column({type: "boolean", default: false})
    verifiedPhoneNumber:boolean;

    @Column({type:"text"})
    profilePhoto:string;

    @Column({type: "boolean",default: false})
    isDriving: boolean;

    @Column({type: "boolean", default: false})
    isTaken: boolean;

    @Column({type:"double precision",default:0})
    lastLng:number;

    @Column({type:"double precision",default:0})
    lastLat:number;

    @Column({type:"double precision",default:0})
    lastOrientation:number;

    @CreateDateColumn()
    createAt:string;

    @UpdateDateColumn()
    updateAt:string;

}


export default user;