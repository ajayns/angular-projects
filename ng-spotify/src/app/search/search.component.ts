import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../spotify.service';
import { Artist } from '../../models/Artist'

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
	searchRes:Artist;
	searchStr:string;
  constructor(private spotifyService:SpotifyService) { }

  ngOnInit() {
  }
	
	searchMusic() {
		this.spotifyService.searchMusic(this.searchStr)
			.subscribe( res => {
				this.searchRes = res.artists.items;
		});
	}

}
