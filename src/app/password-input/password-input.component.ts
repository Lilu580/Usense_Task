import { Component } from '@angular/core';

@Component({
  selector: 'app-password-input',
  templateUrl: './password-input.component.html',
  styleUrls: ['./password-input.component.scss']
})
export class PasswordInputComponent {
  hide = true;
  password: string = '';

  checkPasswordStrength() {
    const password = this.password;
    let strengthSections = document.querySelectorAll('.section');
    const charsPattern = new RegExp(/[a-zA-Z]/);
    const numbersPattern = new RegExp(/[0-9]/);
    const symbolsPattern = new RegExp(/[!@#$%^&*]/);
    const passwordLength = password.length;

    const removeColors = (index: number) => {
      strengthSections[index].classList.remove('gray','red', 'yellow', 'green');
    }

    strengthSections.forEach(section => {
      section.classList.remove('red', 'yellow', 'green');
      section.classList.add('gray');
    });

    if(password.length < 8 && passwordLength !== 0) {
      return strengthSections.forEach((section,index) => {
        removeColors(index);
        section.classList.add('red');
      });
    }


    if (charsPattern.test(password) && numbersPattern.test(password) && symbolsPattern.test(password)) {
      strengthSections.forEach((section, index) => {
        removeColors(index);
        section.classList.add('green');
      });
    } else if (
        (charsPattern.test(password) && numbersPattern.test(password))
        || (charsPattern.test(password) && symbolsPattern.test(password))
        || (numbersPattern.test(password) && symbolsPattern.test(password))
        ) {
      removeColors(0);
      removeColors(1)
      strengthSections[0].classList.add('yellow');
      strengthSections[1].classList.add('yellow');
    } else if (password.length !== 0) {
      removeColors(0);
      strengthSections[0].classList.add('red');
    }
  }
}
