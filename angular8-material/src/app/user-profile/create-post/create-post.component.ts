import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from '../post';
import { PostServiceService } from '../post-service.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  constructor(
    private formGroup: FormGroup, private formControl: FormControl,
    private formBuilder: FormBuilder, private postService: PostServiceService, private router: Router) {
    this.postForm = this.formBuilder.group({
      postTitle: this.postTitle,
      postContent: this.postContent,
      postAuther: this.postAuther
    });
   }

  posts: Post[];
  postForm: FormGroup;
  postTitle = new FormControl('', Validators.required);
  postContent = new FormControl('', Validators.required);
  postAuther = new FormControl('', Validators.required);

  ngOnInit(): void {
  }


  createPost(postTitle, postContent, postAuther) {
    this.postService.createPost(postTitle, postContent, postAuther);
    this.postForm.reset();
    this.router.navigate(['posts']);
  }

}

