import {Component} from 'angular2/core'
import {AddService} from '../service/add.service.js';

@Component({
  selector: 'add-user',
  templateUrl: 'template/add-user.html',
  providers: [AddService]
})

export class AddUserComponent {
  formResult: string;
  error: string;
  userName: string;
  userAge: string;
  password: string;

  constructor(private _service: AddService) {
  }

  addUser() {
    var region = "add?name=" + this.userName + "&age=" + this.userAge + "&password=" + this.password;
    this._service.addItem(region)
      .subscribe(
        data => this.formResult = data.statusText,
        error => this.error = "API Call is invalid."
      );
    this.userName = "";
    this.userAge = "";
    this.password = "";
  }
}
