import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/services/account/account.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {
  signInForm: FormGroup = new FormGroup({});
  // validation: any;

  constructor(
    private router: Router,
    public fb: FormBuilder,
    public accountService: AccountService
  ) {}

  ngOnInit(): void {
    this.signInForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  redirect() {
    this.router.navigate(['/home']);
  }

  // validate(): void {
  //   this.accountService.validateCredentials(this.signInForm.value).subscribe(
  //     (resp) => {
  //       if (resp == true) {
  //         // this.validation = resp;
  //         alert('Inicio de sesión exitoso');
  //         this.redirect();
  //       } else if (resp == false) {
  //         // this.validation = resp;
  //         alert('Email o contraseña incorrecta');
  //       }
  //     },
  //     (error) => {
  //       console.error(error);
  //     }
  //   );
  // }

  validate(): void {
    this.accountService.validateCredentials(this.signInForm.value).subscribe(
      (resp) => {
        alert('Inicio de sesión exitoso');
        this.redirect();
      },
      (error) => {
        if (error.status === 401) {
          alert('Email o contraseña incorrecta');
          console.error(error);
        }
      }
    );
  }
}
