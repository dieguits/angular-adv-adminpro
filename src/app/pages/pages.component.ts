import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../services/settings.service';

declare function customInitFunction():any;
@Component({
	selector: 'app-pages',
	templateUrl: './pages.component.html',
	styles: [
	]
})
export class PagesComponent implements OnInit {

	public year: number = new Date().getFullYear();

	constructor(private settingService: SettingsService) { }

	ngOnInit(): void {
		customInitFunction();
	}

}
