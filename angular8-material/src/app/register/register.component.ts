import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './../shared/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(
    public fb: FormBuilder,
    public authService: AuthService,
    public router: Router
  ) {
      this.registerForm = this.fb.group({
        name: ['', Validators.required],
        email: ['', Validators.required],
        password: ['', Validators.required]
      });
   }

  ngOnInit(): void {
  }

  registerUser() {
     this.authService.register(this.registerForm.value).subscribe((res) => {
        this.registerForm.reset();
        this.router.navigate(['login']);
    });
  }
}
