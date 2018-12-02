import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import {MusicService} from '../services/music.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private service:MusicService) { }

  onAddPost2(form: NgForm) {

    this.service.addPost2(form.value.email, form.value.subject, form.value.comment).subscribe();
    
    console.log(form.value);
    form.resetForm();
  }

  ngOnInit() {
  }

}
