import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private route : Router){}
  ngOnInit(): void {
    const societeid = localStorage.getItem("societeid");
    if(societeid === null){
      this.isAuthenticated = false;
    }else{
      this.isAuthenticated = true;
    }
  }
  title = 'MyRhAngular';
  
  
  isAuthenticated : boolean = false;
  logout(){
    localStorage.removeItem("token");
    localStorage.removeItem("id");
    this.route.navigate(['/login']);
    
  }
}
