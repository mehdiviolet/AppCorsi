import { Component, Input } from '@angular/core';
import { CourseType } from '../../types/course.type';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'course-component',
  imports: [RouterLink],
  templateUrl: './course.html',
  styleUrl: './course.css',
})
export class Course {
  @Input() course!: CourseType;

  constructor(private router: Router){}


  goToDetail(){
    this.router.navigate(['/detail/' + this.course.id])

  }
}
