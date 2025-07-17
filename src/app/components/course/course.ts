import { Component, Input } from '@angular/core';
import { CourseType } from '../../types/course.type';

@Component({
  selector: 'course-component',
  imports: [],
  templateUrl: './course.html',
  styleUrl: './course.css',
})
export class Course {
  @Input() course!: CourseType;
}
