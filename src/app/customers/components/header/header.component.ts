import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

	isLogin = false

  	constructor() { }

  	ngOnInit(): void {
  		const token = JSON.parse(localStorage.getItem('token')!)

  		if(token){
  			this.isLogin = true
  		}else{
  			this.isLogin = false
  		}
  	}

}
