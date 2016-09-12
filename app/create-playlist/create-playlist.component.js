"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var CreatePlaylistComponent = (function () {
    function CreatePlaylistComponent() {
        this.isAddSongHidden = true;
    }
    CreatePlaylistComponent.prototype.ngOnInit = function () { };
    CreatePlaylistComponent.prototype.displayAddSong = function () {
        this.isAddSongHidden = false;
        var addSongs = document.getElementById('addSongs');
        var addSong = document.getElementById('addSong');
        var addSongLink = document.getElementById('addSongLink');
        addSongs.insertBefore(addSong.cloneNode(true), addSongLink);
    };
    CreatePlaylistComponent = __decorate([
        core_1.Component({
            selector: 'create-playlist',
            templateUrl: 'app/create-playlist/create-playlist.component.html',
            styleUrls: ['app/create-playlist/create-playlist.component.css'],
        }), 
        __metadata('design:paramtypes', [])
    ], CreatePlaylistComponent);
    return CreatePlaylistComponent;
}());
exports.CreatePlaylistComponent = CreatePlaylistComponent;
//# sourceMappingURL=create-playlist.component.js.map