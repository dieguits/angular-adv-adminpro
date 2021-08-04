import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
	selector: 'app-increasing',
	templateUrl: './increasing.component.html',
	styleUrls: ['./increasing.component.css']
})
export class IncreasingComponent implements OnInit {

	@Input() progress: number = 40;
	@Input('color') btnClass: string = 'btn-primary';
	@Output() outputValue: EventEmitter<number> = new EventEmitter();
	localNumber: number = 0;

	constructor() { }

	ngOnInit(): void {
		this.btnClass = `btn ${this.btnClass}`
	}

	changeValue(value: number) {

		if (value >= 0 && this.progress >= 100) {
			this.progress = 100;
		} else if (value < 0 && this.progress <= 0) {
			this.progress = 0;
		} else {
			this.progress = this.progress + value;
		}

		this.outputValue.emit(this.progress);
	}

	onChange(event: number) {

		if (event >= 100) {
			this.progress = 100;
		} else if (event <= 0) {
			this.progress = 0;
		} else {
			this.progress = event;
		}
		
		this.localNumber = event;
		this.progress = this.progress;
		this.outputValue.emit(this.progress)
	}

}
