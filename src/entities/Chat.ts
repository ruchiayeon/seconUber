import { Entity, BaseEntity ,PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany} from "typeorm";

import User from "./User";
import Message from "./Message";

@Entity()
class Chat extends BaseEntity{
    
    @PrimaryGeneratedColumn()
    id:number;

    @OneToMany(type => Message, message => message.chat)
    messages:Message[] //하나의 채팅은 많은 메세지를 가진다.
    
    @OneToMany(type => User, user => user.chat)
    participant:User[] //하나의 채팅은 많은 유저를 가진다. 

    @CreateDateColumn()
    createAt: string;
    
    @UpdateDateColumn()
    updateAt:string;
}

export default Chat;