import { CurrencyPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
	selector: 'app-account-settings',
	templateUrl: './account-settings.component.html',
	styleUrls: ['./account-settings.component.css']
})
export class AccountSettingsComponent implements OnInit {
	
	constructor(private settingService: SettingsService) { }

	ngOnInit(): void {
		this.settingService.checkCurrentTheme();
	}

	changeTheme(value: string) {

		this.settingService.changeTheme(value);
	}
}
