import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-promises',
	templateUrl: './promises.component.html',
	styleUrls: ['./promises.component.css']
})
export class PromisesComponent implements OnInit {

	public word = 'Hello world';
	constructor() { }

	ngOnInit(): void {
		// const promise = new Promise((resolve, reject) => {

		// 	if (false) {
		// 		resolve('here something different!!');//<== This result inside the parentesis can be used in the then part as a parameter
		// 	} else {
		// 		reject('Something went wrong!!!')
		// 	}

		// });

		// //callback
		// promise.then((message) => {
		// 	console.log(`Its finished ${this.word} , and the message ${message}`);
		// }).catch(error => console.log('Error: ', error));

		// console.log('Fin Init');

		this.getUsuarios().then(usuarios => {
			console.log(usuarios);
		});
	}

	getUsuarios() {

		return new Promise(resolve => {
			fetch('https://reqres.in/api/users')
				.then(resp => resp.json())
				.then(body => resolve(body.data))
		});

	}

}
