import { Component } from '@angular/core';
import { ApiService } from '../../../app/appservice.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private apiService: ApiService) {}
  ngOnInit(): void {
    
  }
  loginUser() : void{
    
      this.apiService.getDesignTypes().subscribe((data) => {
        alert(data);
        console.log('Received data:', data);
        // Handle the data as needed
      });
    alert('this is login');
  }
}
