import { Component, OnInit } from '@angular/core';
import { Navbar } from '../../components/navbar/navbar';
import { Course } from '../../components/course/course';
import { CourseType } from '../../types/course.type';
import { CorsiService } from '../../services/corsi.service';

@Component({
  selector: 'app-home.component',
  imports: [ Navbar, Course],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  
  public courses: CourseType[]=[];

  constructor(private corsiService: CorsiService){}
  ngOnInit(){
    this.courses = this.corsiService.getCorsi()

  }

  onGetCorso(id:number){
    this.corsiService.getCorso(id)
  }
}
