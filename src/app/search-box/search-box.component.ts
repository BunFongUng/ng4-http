import { Component, OnInit, Output, EventEmitter, ElementRef } from '@angular/core';

import { SearchResult } from '../_models/search-result';
import { YouTubeSearchService } from '../_services/you-tube-search.service';

import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {
  @Output() loading: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() results: EventEmitter<SearchResult[]> = new EventEmitter<SearchResult[]>();

  constructor(private youtube: YouTubeSearchService, private el: ElementRef) { }

  ngOnInit() {
    Observable.fromEvent(this.el.nativeElement, 'keyup')
      .map((e: any) => e.target.value ) // extract the value of the input
      .filter((text: string) => text.length > 1)
      .debounceTime(500)
      .do(() => this.loading.emit(true))
      .map((query: string) => this.youtube.search(query))
      .switch()
      .subscribe((results: SearchResult[]) => {
        this.loading.emit(false);
        this.results.emit(results);
      }, (err: any) => {
        console.error(err);
        this.loading.emit(false);
      }, () => {
        this.loading.emit(false);
      });
  }

}
