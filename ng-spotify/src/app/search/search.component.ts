import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../spotify.service';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
	searchStr:string;
  constructor(private spotifyService:SpotifyService) { }

  ngOnInit() {
  }
	
	searchMusic() {
		this.spotifyService.searchMusic(this.searchStr)
			.subscribe( res => console.log(res.artists.items));
	}

}
