import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ClassesModule } from './classes/classes.module';
import { CoursesModule } from './courses/courses.module';
import { TasksModule } from './tasks/tasks.module';
import { NotesModule } from './notes/notes.module';
import { FilesModule } from './files/files.module';
import { GradingModule } from './grading/grading.module';
import { CalendarModule } from './calendar/calendar.module';
import { AcademicModule } from './academic/academic.module';
import { SyncModule } from './sync/sync.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [AuthModule, UsersModule, ClassesModule, CoursesModule, TasksModule, NotesModule, FilesModule, GradingModule, CalendarModule, AcademicModule, SyncModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
