import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  hide = true;
  password: string = '';

  checkPasswordStrength() {
    const password = this.password;
    let strengthSections = document.querySelectorAll('.section');

    const removeColors = (index: number) => {
      strengthSections[index].classList.remove('gray','red', 'yellow', 'green');
    }

    strengthSections.forEach(section => {
      section.classList.remove('red', 'yellow', 'green');
      section.classList.add('gray');
    });

    if (password.length < 8 && password.length !== 0) {
      strengthSections.forEach((section,index) => {
        removeColors(index);
        section.classList.add('red');
      });
    } else if(password.length !== 0) {
      if (/[a-zA-Z]/.test(password) && /[0-9]/.test(password) && /[!@#$%^&*]/.test(password)) {
        strengthSections.forEach((section, index) => {
          removeColors(index);
          section.classList.add('green');
        });
      } else if (
          (/[a-zA-Z]/.test(password) && /[0-9]/.test(password))
          || (/[a-zA-Z]/.test(password) && /[!@#$%^&*]/.test(password))
          || (/[0-9]/.test(password) && /[!@#$%^&*]/.test(password))
          ) {
        removeColors(0);
        removeColors(1)
        strengthSections[0].classList.add('yellow');
        strengthSections[1].classList.add('yellow');
      } else {
        removeColors(0);
        strengthSections[0].classList.add('red');
      }
    }



    // if (/[a-zA-Z]/.test(password) && /[0-9]/.test(password) && /[!@#$%^&*]/.test(password)) {
    //   strengthSections.forEach(section => {
    //     section.classList.add('green');
    //   });
    // } else if(password.length < 8) {
    //   if(password.length === 0) {
    //     strengthSections.forEach(section => {
    //       section.classList.remove('red', 'yellow', 'green');
    //       section.classList.add('gray');
    //     });
    //   } else {
    //     strengthSections.forEach(section => {
    //       section.classList.add('red');
    //     });
    //   }
    // } else if ((/[a-zA-Z]/.test(password) && /[0-9]/.test(password)) || (/[a-zA-Z]/.test(password) && /[!@#$%^&*]/.test(password)) || (/[0-9]/.test(password) && /[!@#$%^&*]/.test(password))) {
    //   strengthSections[0].classList.remove('gray');
    //   strengthSections[0].classList.add('yellow');
    //   strengthSections[1].classList.add('yellow');
    // } else if (password.length === 0){
    // } else {
    //   strengthSections[0].classList.remove('gray');
    //   strengthSections[0].classList.add('red');
    // }
  }
}
