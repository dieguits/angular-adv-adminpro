import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class SideBarService {

	public menu: any[] = [
		{
			title: 'Dashboard',
			icon: 'mdi mdi-gauge',
			subMenu: [
				{title: 'Main', url: '/'},
				{title: 'ProgressBar', url: 'progress'},
				{title: 'Grafica', url: 'grafica1'},
				{title: 'Promises', url: 'promises'},
				{title: 'RXJS', url: 'rxjs'},
			]
		}
	];

	constructor() { }
}
