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
  id: 1,
  title: 'javascript',
  imgUrl: 'javascript.jpg',
  description: 'JavaScript è un linguaggio di programmazione versatile utilizzato principalmente per lo sviluppo di applicazioni web dinamiche e interattive.',
},
{
  id: 2,
  title: 'angular',
  imgUrl: 'angular.jpg',
  description: 'Angular è un framework open-source sviluppato da Google per creare applicazioni web single-page strutturate ed efficienti.',
},
{
  id: 3,
  title: 'html',
  imgUrl: 'html.jpg',
  description: 'HTML (HyperText Markup Language) è il linguaggio standard per la creazione delle pagine web e la strutturazione dei loro contenuti.',
},
{
  id: 4,
  title: 'css',
  imgUrl: 'css.jpg',
  description: 'CSS (Cascading Style Sheets) è un linguaggio utilizzato per definire lo stile e l’aspetto grafico degli elementi HTML in una pagina web.',
},
{
  id: 5,
  title: 'wordpress',
  imgUrl: 'wordpress.jpg',
  description: 'WordPress è un CMS (Content Management System) open-source che consente di creare e gestire facilmente siti web e blog.',
},
{
  id: 6,
  title: 'react',
  imgUrl: 'react.jpg',
  description: 'React è una libreria JavaScript sviluppata da Meta per costruire interfacce utente interattive basate su componenti riutilizzabili.',
}

  ];
}
