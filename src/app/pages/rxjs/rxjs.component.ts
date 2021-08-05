import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, interval, Subscription } from 'rxjs';
import { filter, map, retry, take } from 'rxjs/operators';


@Component({
	selector: 'app-rxjs',
	templateUrl: './rxjs.component.html',
	styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit, OnDestroy {

	public intervalSubs: Subscription;

	constructor() {

		// this.getObservable().pipe(
		// 	retry(1)
		// ).subscribe(
		// 	value => console.log('Subs: ', value),
		// 	error => console.warn('ERROR: ', error),
		// 	() => console.info('Obs terminado!!')
		// );
		this.intervalSubs = this.getInterval().subscribe(console.log);
	}

	ngOnInit(): void {
	}

	ngOnDestroy(): void {

		this.intervalSubs.unsubscribe();
	}

	getInterval = (): Observable<number> => {
		return interval(100).pipe(
			take(10),
			map(value => value + 1),
			filter(value => (value % 2) === 0 ? true : false),
		);
	}

	getObservable = (): Observable<number> => {

		let i = 0;

		return new Observable<number>(observer => {

			const interval = setInterval(() => {
				// console.log('tick');
				i++;
				observer.next(i);

				if (i == 5) {
					clearInterval(interval);
					observer.complete();
				}

				if (i == 2) {
					observer.error('i llego al valor de 2')
				}
			}, 1000)
		});
	}
}

