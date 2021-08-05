import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ActivationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
	selector: 'app-breadcrums',
	templateUrl: './breadcrums.component.html',
	styles: [
	]
})
export class BreadcrumsComponent implements OnInit, OnDestroy {

	public title: string = 'Blank Page';
	public titleSubs$: Subscription;

	constructor(private router: Router) {
		
		this.titleSubs$ = this.getRouteArguments().subscribe(
			({ title }) => {
				console.log(title)
				this.title = title;
				document.title = `AdminPro - ${title}`;
			}
		)
	}

	ngOnDestroy(): void {
		this.titleSubs$.unsubscribe();
	}

	getRouteArguments = () => {
		return this.router.events.pipe(
			filter((event: any) => event instanceof ActivationEnd),
			filter((event: ActivationEnd) => event.snapshot.firstChild === null),
			map((event: ActivationEnd) => event.snapshot.data)
		);
	}

	ngOnInit(): void {
	}

}
