import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http'
import 'rxjs/add/operator/map'

@Injectable()
export class SpotifyService {
	private searchUrl:string;

  constructor(private http:Http) { }

	searchMusic(str:string, type = 'artist') {
		this.searchUrl = 'https://api.spotify.com/v1/search?query='+str+'&offset=0&limit=20&type='+type+'&market=US';
		return this.http.get(this.searchUrl)
			.map( res => res.json());
	}
}
