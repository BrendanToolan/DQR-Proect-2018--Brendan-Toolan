import { Component, OnInit } from '@angular/core';
//import { Router } from '@angular/router/src/router';
import { ActivatedRoute } from '@angular/router';
import { RouterModule, Routes, Router } from '@angular/router';
import {MusicService} from '../services/music.service';
import { NgForm } from "@angular/forms";


@Component({
  selector: 'app-music-edit',
  templateUrl: './music-edit.component.html',
  styleUrls: ['./music-edit.component.css']
})
export class MusicEditComponent implements OnInit {
  post : any = [];
  myTitle : String; 
  myContent : String; 
  myAlbum : String
  constructor(private router:Router, private route: ActivatedRoute, private service:MusicService) { }

  ngOnInit() {
    console.log(this.route.snapshot.params['id']);
    this.service.getPost(this.route.snapshot.params['id']).subscribe(data =>
    {
      this.post = data;
      console.log(this.post);
      this.myTitle = this.post.name;
      console.log("message" +this.myTitle);

    });
  }
  onEditPost(form: NgForm) {
    this.service.updatePost(this.post._id, form.value.name, form.value.content, form.value.album, form.value.stars).subscribe(() =>
    {
      this.router.navigate(['/list']);
    });
  }

}
