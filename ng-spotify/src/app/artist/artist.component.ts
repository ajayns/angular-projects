import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../spotify.service';
import { Artist } from '../../models/Artist';
import { Album } from '../../models/Album';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {
	id:string;
	artist:Artist[];
	album:Album[];
	
  constructor(private spotifyService:SpotifyService, private route:ActivatedRoute) { }

  ngOnInit() {
		this.route.params
			.map( params => params['id'])
			.subscribe((id) => {
				this.spotifyService.getArtist(id)
					.subscribe(artist => {
					this.artist = artist; 
				})
		})
  }

}
