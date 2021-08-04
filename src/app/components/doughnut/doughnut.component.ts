import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-doughnut',
	templateUrl: './doughnut.component.html',
	styleUrls: ['./doughnut.component.css']
})
export class DoughnutComponent implements OnInit {

	@Input() title: string = 'This is the Awesome chart!!!';
	@Input() content: string = 'Here the content';

	constructor() { }

	ngOnInit(): void {
	}

}
