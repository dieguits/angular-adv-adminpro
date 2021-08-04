import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class SettingsService {

	private linkTheme = document.querySelector('#theme');

	constructor() {
		const url = localStorage.getItem('theme') || './assets/css/colors/default-dark.css';
		this.linkTheme?.setAttribute('href', url);
	}

	changeTheme(value: string) {

		const url: string = `./assets/css/colors/${value}.css`;

		this.linkTheme?.setAttribute('href', url);
		localStorage.setItem('theme', url);
		this.checkCurrentTheme();
	}

	checkCurrentTheme() {
		const links = document.querySelectorAll('.selector');;
		links.forEach(element => {
			element.classList.remove('working');
			const btnTheme = element.getAttribute('data-theme');
			const url = `./assets/css/colors/${btnTheme}.css`;
			const curentTheme = this.linkTheme?.getAttribute('href');

			if (url === curentTheme) {
				element.classList.add('working')
			}
		})
	}
}
