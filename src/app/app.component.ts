import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  checked1: boolean = false;
  checked2: boolean = false;
  checked3: boolean = false;
  checked4: boolean = false;
  checked5: boolean = false;
  checked6: boolean = false;
  checked7: boolean = false;
  checked8: boolean = false;

  onToggle(checked: any) {
    if (checked == 'checkbox1') {
      if (this.checked1) {
        this.checked2 = true;
        this.checked3 = true;
        this.checked4 = true;
        this.checked5 = true;
        this.checked6 = true;
        this.checked7 = true;
      } else {
        this.checked2 = false;
        this.checked3 = false;
        this.checked4 = false;
        this.checked5 = false;
        this.checked6 = false;
        this.checked7 = false;
      }
    } else if (checked == 'checkbox2') {
      if (this.checked2) {
        this.checked3 = true;
        this.checked4 = true;
        this.checked5 = true;
        if (this.checked6 && this.checked7) {
          this.checked1 = true;
        }
      } else {
        this.checked1 = false;
        this.checked3 = false;
        this.checked4 = false;
        this.checked5 = false;
      }
    } else if (
      checked == 'checkbox3' ||
      checked == 'checkbox4' ||
      checked == 'checkbox5'
    ) {
      if (
        this.checked3 == true &&
        this.checked4 == true &&
        this.checked5 == true
      ) {
        this.checked2 = true;
        if (this.checked6 && this.checked7) {
          this.checked1 = true;
        }
      } else {
        this.checked2 = false;
        this.checked1 = false;
      }
    } else if (checked == 'checkbox6' || checked == 'checkbox7') {
      if (this.checked6 && this.checked7 && this.checked2) {
        this.checked1 = true;
      } else {
        this.checked1 = false;
      }
    }
  }
}
