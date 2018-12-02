import { Component, OnInit } from '@angular/core';
import {MusicService} from '../services/music.service';
import { Observable } from 'rxjs';
import {Post} from '../music.model';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-music-details',
  templateUrl: './music-details.component.html',
  styleUrls: ['./music-details.component.css']
})
export class MusicDetailsComponent implements OnInit {

  
  posts: any = [];

  constructor(private ps:MusicService){}

  ngOnInit(){
   
    this.ps.getPostsData().subscribe(data => {
        this.posts = data;
    });
   }

   onDelete(id:String){
     console.log("Delete called "+ id);
     this.ps.deletePost(id).subscribe(() =>
     {
        this.ngOnInit();
     })
   }
}
