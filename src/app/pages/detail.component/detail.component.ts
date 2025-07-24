import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CorsiService } from '../../services/corsi.service';
import { CourseType } from '../../types/course.type';
import { Navbar } from "../../components/navbar/navbar";

@Component({
  selector: 'app-detail.component',
  imports: [Navbar],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent implements OnInit{

  public course: CourseType ;


  constructor(private activatedRoute:ActivatedRoute, private corsiService: CorsiService){}


  ngOnInit(){
    const id = this.activatedRoute.snapshot.params["id"]*1
    this.course = this.corsiService.getCorso(Number(id))
  }
  
}
