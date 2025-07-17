import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { Course } from './components/course/course';
import { CourseType } from './types/course.type';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Course],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  courses: CourseType[] = [
    {
      title: 'Angular',
      imgUrl: '',
      description: 'angular....',
    },

    {
      title: 'TypeScript',
      imgUrl: '',
      description: 'typescript',
    },
  ];
}
