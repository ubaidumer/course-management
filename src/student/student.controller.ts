import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Student } from './student.entity';
import { StudentService } from './student.service';

@Controller('student')
export class StudentController {
    constructor(private studentService: StudentService){}
    @Get()
    showAllStudents(){
        return this.studentService.showAll();
    }

    @Post()
    createStudent(@Body() data:Student){
        return this.studentService.create(data)
    }

    @Get(':id')
    readStudent(@Param('id') id:string){
        return this.studentService.read(id);
    }

    @Put(':id')
    updateStudent(@Param('id') id:string, @Body() data: Partial<Student>){
        return this.studentService.update(id,data);
    }

    @Delete(':id')
    destroyStudent(@Param('id') id:string){
        return this.studentService.destroy(id);
    }
}