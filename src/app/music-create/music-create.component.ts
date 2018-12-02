import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import {MusicService} from '../services/music.service';

@Component({
  selector: 'app-music-create',
  templateUrl: './music-create.component.html',
  styleUrls: ['./music-create.component.css']
})
export class MusicCreateComponent implements OnInit {

  constructor(private service:MusicService) { }

  onAddPost(form: NgForm) {

    this.service.addPost(form.value.name, form.value.album, form.value.content, form.value.stars).subscribe();
    
    console.log(form.value);
    form.resetForm();
  }


  ngOnInit() {



  }

}
