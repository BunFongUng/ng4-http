import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { SearchResult } from '../_models/search-result';

export const YOUTUBE_API_KEY: string = 'AIzaSyCnetpif0UR9Qf0yNaPwjXfiNN_sZ7wI50';
export const YOUTUBE_API_URL: string = 'https://www.googleapis.com/youtube/v3/search';

@Injectable()
export class YouTubeSearchService {

  constructor(private http: Http,
      @Inject(YOUTUBE_API_KEY) private apiKey: string,
      @Inject(YOUTUBE_API_URL) private apiUrl: string) {
        console.log(this.apiKey);
        console.log(this.apiUrl);
  }

  search(query: string): Observable<SearchResult[]> {
    const params: string = [
      `q=${query}`,
      `key=${this.apiKey}`,
      `part=snippet`,
      `type=video`,
      `maxResults=10`
    ].join('&');

    const queryUrl: string = `${this.apiUrl}?${params}`;

    return this.http.get(queryUrl).map((response: Response) => {
      console.log(response);
      return (<any>response.json()).items.map(item => {
        return new SearchResult({
          id: item.id.videoId,
          title: item.snippet.title,
          description: item.snippet.description,
          thumbnailUrl: item.snippet.thumbnails.high.url
        });
      });
    });
  }
}

