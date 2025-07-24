import { Component} from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'navbar-component',
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})


export class Navbar {

    public logo = "assets/img/logo.jpg";
  

}
