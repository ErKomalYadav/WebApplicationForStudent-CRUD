import { Component, OnInit, EventEmitter, Output } from '@angular/core';
    import { UserContact } from '../share/usercontact.model';
    import { UsercontactService } from '../share/usercontact.service';
    import { FormBuilder, FormGroup, Validators } from '@angular/forms';
    import { Router } from '@angular/router';


    @Component({
      selector: 'app-edit-usercontact',
      templateUrl: './edit-usercontact.component.html',
      styleUrls: ['./edit-usercontact.component.css']
    })
    export class EditUsercontactComponent implements OnInit {

      constructor(private formBuilder: FormBuilder, private router: Router, private userService: UsercontactService) { }
      addForm: FormGroup;
      usercontact: UserContact;

      ngOnInit() {
        const userId = localStorage.getItem('editUserId');
        if (!userId) {
          alert('Invalid action.');
          this.router.navigate(['']);
          return;
        }
      this.addForm = this.formBuilder.group({
        rollno: [],
        name: ['', Validators.required],
        age: ['', Validators.required],
        gender: ['', Validators.required]
      });
        const data = this.userService.getUserById(+userId);
        this.addForm.setValue(data);
      }

      isInvalid(name: string) {
        const control = this.addForm.get(name);
        return control.invalid && control.dirty;
      }
    
      isageInvalid(age: any) {
        const control = this.addForm.get(age);
        return control.invalid && control.dirty;
      }
      isgenderInvalid(gender: string) {
        const control = this.addForm.get(gender);
        return control.invalid && control.dirty;
      }

      onSubmit() {
        this.userService.update(this.addForm.value);
        this.router.navigate(['']);
      }

      onCancel() {
        this.router.navigate(['']);
      }
    }
