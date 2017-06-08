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
	// Declare variables
	id:string;
	artist:Artist[];
	albums:Album[];
	
  constructor(private spotifyService:SpotifyService, private route:ActivatedRoute) { }

	// Load artists on intializatoin
  ngOnInit() {
		// Get id from route parameter and query Artist and albums
		this.route.params
			.map( params => params['id'])
			.subscribe((id) => {
				this.spotifyService.getArtist(id)
					.subscribe(artist => {
					this.artist = artist; 
				})
			
				this.spotifyService.getAlbums(id)
					.subscribe(albums => {
					this.albums = albums.items; 
				})
		})
  }

}
