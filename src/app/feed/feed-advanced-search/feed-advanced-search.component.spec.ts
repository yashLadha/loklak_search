/* tslint:disable:no-unused-variable */

import {async, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {StoreModule} from '@ngrx/store';
import {FeedAdvancedSearchComponent} from './feed-advanced-search.component';
import {MatButtonToggleModule, MatIconModule, MatMenuModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {reducer} from '../../reducers';

describe('Component: FeedAdvancedSearchComponent', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [
				RouterTestingModule,
				ReactiveFormsModule,
				MatButtonToggleModule,
				MatMenuModule,
				MatIconModule,
				FormsModule,
				StoreModule.provideStore(reducer)
			],
			declarations: [
				FeedAdvancedSearchComponent
			]
		});
	});

	it('should create an instance', async(() => {
		const component = TestBed.createComponent(FeedAdvancedSearchComponent);
		expect(component).toBeTruthy();
	}));
});
