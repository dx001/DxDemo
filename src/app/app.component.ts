import { ThrowStmt } from '@angular/compiler';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyApp';
//<button (click)="goLogin()">Go Login</button>
  constructor(private myrouter:Router) // DI ->router
  {

  }
  goLogin()
  {
      this.myrouter.navigate(['login']);
  }
 /* <button (click)="goHome()">
 Home
</button>
goHome()
{
  this.myrouter.navigate(['home']);
} */
}
