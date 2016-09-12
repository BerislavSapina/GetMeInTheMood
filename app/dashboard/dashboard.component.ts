import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';

@Component({
    selector: 'dashboard',
    templateUrl: 'app/dashboard/dashboard.component.html',
    styleUrls: ['app/dashboard/dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    private _youTubeSrc : string = "https://www.youtube.com/watch?v=bTTrX-CsFq8" ;
    constructor(private domSanitizer : DomSanitizer) { }


    ngOnInit() { }

    get youTubeSrc(){
        var url = this._youTubeSrc.replace("watch?v=","v/");
        return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
    }
}