import {Column, Entity, JoinTable, ManyToMany} from "typeorm";
import {BaseEntity} from "../base.entity";
import { Course } from "../course/course.entity";
@Entity('Student')
export class Student extends BaseEntity{
 
    @Column({type:"varchar",length:25,nullable:false})
    firstname:String;
    @Column({type:"varchar",length:25,nullable:false})
    lastname:String;
    @Column({type:"varchar",length:50,nullable:false,unique:true})
    username:String;
    @Column({type:"varchar",length:35,nullable:false,unique:true})
    email:String;
    @Column({type:"varchar",length:35,nullable:false})
    password:String;
    @Column({type:"text",nullable:true,default:null})
    address:String;
    @Column({type:"varchar",length:25,nullable:false,unique:true})
    phonenumber:String;
    @Column({type:"text",nullable:false})
    image:String;
    @ManyToMany(type=> Course, course=>course.student) 
    course: Course[];
}