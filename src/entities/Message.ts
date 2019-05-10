import { Entity, BaseEntity ,PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne} from "typeorm";
import User from "./User";
import Chat from "./Chat";

@Entity()
class Message extends BaseEntity{
    
    @PrimaryGeneratedColumn()
    id:number;

    @Column({type:"text"})
    text:string;

    @ManyToOne(type => Chat , chat => chat.messages)
    chat:Chat; //많은 메세지는 하나의 채팅을 가진다. 

    @ManyToOne(type => User, user => user.messages)
    user:User; //많은 메세지는 하나의 유저를 가진다. 

    @CreateDateColumn()
    createAt:string;

    @UpdateDateColumn()
    updateAt:string;

}

export default Message;