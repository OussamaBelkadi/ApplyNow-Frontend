import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
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

    localStorage.removeItem("societeid");

  }
}
