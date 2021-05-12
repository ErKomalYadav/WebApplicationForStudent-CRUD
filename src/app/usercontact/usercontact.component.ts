import { Component, OnInit } from '@angular/core';
      import { UserContact } from '../share/usercontact.model';
      import { UsercontactService } from '../share/usercontact.service';
      import { Router } from '@angular/router';

      @Component({
        selector: 'app-usercontact',
        templateUrl: './usercontact.component.html',
        styleUrls: ['./usercontact.component.css'],
      })

      export class UsercontactComponent implements OnInit {

        usercontacts:UserContact[]; // Array<string>
        usercont: UserContact;

        constructor(private ucs: UsercontactService, private router: Router) {
        }

        editUserContact(usercontact: UserContact) {
          console.log(usercontact);
          localStorage.removeItem('editUserId');
          localStorage.setItem('editUserId', usercontact.rollno.toString());
          this.router.navigate(['edit']);
        }

        deleteUserContact(usercontact: UserContact) {
          console.log(usercontact);
          this.ucs.delete(usercontact);
        }

        ngOnInit() {
          console.log('usercontact:init');
          this.usercontacts = this.ucs.getall();
          console.log(this.usercontacts);
        }
      }
