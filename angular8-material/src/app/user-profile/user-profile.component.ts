import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { PostServiceService } from './post-service.service';
import { Post } from '../user-profile/post';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  posts: Post[] = [];
  constructor(private postService: PostServiceService,
              private authService: AuthService) { }

  ngOnInit(): void {
  }

  logout() {
    this.authService.logout();
  }

  getAllPosts() {
    this.postService.getPost().subscribe( posts => {
        this.posts = posts;
    });
  }
}
