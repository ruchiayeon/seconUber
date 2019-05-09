import { Column,BaseEntity,Entity,CreateDateColumn,UpdateDateColumn, PrimaryGeneratedColumn, BeforeInsert} from 'typeorm';
import { verificationTarget } from '../../src/types/types';

const PHONE ="PHONE";
const EMAIL ="EMAIL";

@Entity()
class Verification extends BaseEntity{

    @PrimaryGeneratedColumn()
    id:number;

    @Column({type:"text"})//enum이 뭔지 확인-->열거형이라고 함 
    target:verificationTarget;

    @Column({type:"text"})
    payload:string;

    @Column({type:"text"})
    key:string;

    @Column({type:"boolean",default:false})
    used:boolean;

    @CreateDateColumn()
    createAt:string;

    @UpdateDateColumn()
    updateAt:string;

    @BeforeInsert() //createkey라는 함수를 만들려고 한다
    createKey():void{
        if(this.target === PHONE){
            this.key = Math.floor(Math.random()*1000000).toString();
        }else if(this.target === EMAIL){
            this.key = Math.random().toString(36).substring(2);
        }
    };
    //Promise void가 아닌 그냥 void로 하네..? return void를 표현함.

}

export default Verification;