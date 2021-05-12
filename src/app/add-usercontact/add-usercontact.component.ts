import { Component, OnInit, EventEmitter, Output } from '@angular/core';
    import { UserContact } from '../share/usercontact.model';
    import { UsercontactService } from '../share/usercontact.service';
    import { FormBuilder, FormGroup, Validators } from '@angular/forms';
    import { Router } from '@angular/router';

    @Component({
      selector: 'app-add-usercontact',
      templateUrl: './add-usercontact.component.html',
      styleUrls: ['./add-usercontact.component.css']
    })

    export class AddUsercontactComponent implements OnInit {

      addForm: FormGroup;

      constructor(private formBuilder: FormBuilder, private router: Router, private userService: UsercontactService) { }
      
      @Output()
      createUsercontact = new EventEmitter<UserContact>();

      ngOnInit() {
      this.addForm = this.formBuilder.group({
          rollno: [],
          name: ['', Validators.required],
          age: ['', Validators.required],
          gender: ['', Validators.required]
        });
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
        this.userService.create(this.addForm.value);

        this.router.navigate(['']);
      }

      onCancel() {
        this.router.navigate(['']);
      }
    }
