import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'create-playlist',
    templateUrl: 'app/create-playlist/create-playlist.component.html',
    styleUrls: ['app/create-playlist/create-playlist.component.css'],
})
export class CreatePlaylistComponent implements OnInit {
    public isAddSongHidden : boolean = true;
    constructor() { }

    ngOnInit() { }

    public displayAddSong()
    {
        this.isAddSongHidden = false;
        
        var addSongs = document.getElementById('addSongs');
        var addSong = document.getElementById('addSong'); 
        var addSongLink = document.getElementById('addSongLink');

        addSongs.insertBefore(addSong.cloneNode(true),addSongLink);
    }
}