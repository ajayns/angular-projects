import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../spotify.service';
import { Artist } from '../../models/Artist';
import { Album } from '../../models/Album';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
	id:string;
	album:Album[];
	
  constructor(private spotifyService:SpotifyService, private route:ActivatedRoute) { }

  ngOnInit() {
		this.route.params
			.map( params => params['id'])
			.subscribe((id) => {
				this.spotifyService.getAlbum(id)
					.subscribe(album => {
					this.album = album; 
				})
		})
  }
}
