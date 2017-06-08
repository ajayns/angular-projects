import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {
	// Declare variablename:type
	private searchUrl:string;
	private artistUrl:string;
	private albumsUrl:string;
	private albumUrl:string;

  constructor(private http:Http) { }

	// Query Spotify Web API to get artists
	searchMusic(str:string, type = 'artist') {
		this.searchUrl = 'https://api.spotify.com/v1/search?query='+str+'&offset=0&limit=20&type='+type+'&market=US';
		return this.http.get(this.searchUrl)
			.map( res => res.json());
	}
	
	// Query artist details by id
	getArtist(id:string) {
		this.artistUrl = 'https://api.spotify.com/v1/artists/'+id;
		return this.http.get(this.artistUrl)
			.map( res => res.json());
	}
	
	// Query albums by artist using artist id
	getAlbums(artistId:string) {
		this.albumsUrl = 'https://api.spotify.com/v1/artists/'+artistId+'/albums';
		return this.http.get(this.albumsUrl)
			.map( res => res.json());
	}
	

	// Query album details by id
	getAlbum(id:string) {
		this.albumsUrl = 'https://api.spotify.com/v1/albums/'+id;
		return this.http.get(this.albumUrl)
			.map( res => res.json());
	}

}
