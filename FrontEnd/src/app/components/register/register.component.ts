import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Register } from 'src/app/models/register';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [RegisterService]
})
export class RegisterComponent implements OnInit {

  constructor(private registerService: RegisterService) { }

  ngOnInit() {
    this.getRegister()
  }

  addRegister(form?: NgForm) {
    if (form.value._id) {
      this.registerService.putRegister(form.value).subscribe(res => {
        this.cleanForm(form);
        this.getRegister();
      })
    } else {
      this.registerService.postRegister(form.value)
        .subscribe(res => {
          this.cleanForm(form);
          this.getRegister();
        })
    }
  }

  getRegister() {
    this.registerService.getAllRegister()
      .subscribe(res => {
        console.log(res);

        this.registerService.registers = res as Register[]
      })
  }

  editRegister(register: Register) {
    this.registerService.selectAllRegister = register
  }

  deleteRegister(_id: string) {
    this.registerService.deleteRegister(_id)
      .subscribe(res => {
        this.getRegister();
      })
  }

  cleanForm(form: NgForm) {
    if (form) {
      form.reset();
      this.registerService.selectAllRegister = new Register()
    }
  }
}
