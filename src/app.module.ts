import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {config} from './orm.config';
import { StudentModule } from './student/student.module';
import { CourseModule } from './course/course.module';
import { CourseManagementModule } from './course-management/course-management.module';
@Module({
  imports: [TypeOrmModule.forRoot(config), StudentModule, CourseModule, CourseManagementModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
