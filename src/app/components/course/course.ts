import { Component, Input } from '@angular/core';
import { CourseType } from '../../types/course.type';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'course-component',
  imports: [RouterLink],
  templateUrl: './course.html',
  styleUrl: './course.css',
})
export class Course {
  @Input() course!: CourseType;

  constructor(){}


  goToDetail(){
    

  }
}
