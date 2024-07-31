import { Component,inject,} from '@angular/core';
import { MyServiceService } from './services/my-service.service';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // using injectors
  addService=inject(MyServiceService)
  total=this.addService.add(20,30)
  title = `The total is ${this.total}`;
}
