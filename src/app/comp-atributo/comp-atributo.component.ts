import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-atributo',
  templateUrl: './comp-atributo.component.html',
  styleUrls: ['./comp-atributo.component.css']
})
export class CompAtributoComponent implements OnInit{

	estilo:string = "enable";

	constructor(){}



	ngOnInit(): void {
	}

	trocar(){
		if(this.estilo === "disable"){
			this.estilo = "enable"
		}else{
			this.estilo = "disable"
		}
	}


}
