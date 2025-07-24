import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CorsiService } from '../../services/corsi.service';
import { CourseType } from '../../types/course.type';

@Component({
  selector: 'app-detail.component',
  imports: [],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent implements OnInit{

  public course: CourseType ;


  constructor(private activatedRoute:ActivatedRoute, private corsiService: CorsiService){}

  getId(){
    console.log(this.activatedRoute.snapshot.data['id'])
    console.log(this.activatedRoute.snapshot.params["id"])

    return this.activatedRoute.snapshot.params["id"]
  }

  ngOnInit(){
    this.getId()
    this.corsiService.getCorso(Number(this.getId()))
    this.course = this.corsiService.getCorso(Number(this.getId()))

    console.log(this.course);
    
    
  }
  
}
