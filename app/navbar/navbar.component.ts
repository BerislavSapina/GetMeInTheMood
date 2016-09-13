import { Component, OnInit } from '@angular/core';

declare var $ : any ;

@Component({
    selector: 'navbar',
    templateUrl: 'app/navbar/navbar.component.html', 
    styleUrls: ['app/navbar/navbar.component.css']
})
export class NavbarComponent implements OnInit {
    public title : string = "Get Me In The Mood";
    public logged : boolean = false;
    public username: string = "Bero"
    constructor() { }

    ngOnInit() { 
        
    }
}