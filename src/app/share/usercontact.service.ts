    import { Injectable } from '@angular/core';
    import { UserContact } from './usercontact.model';

    @Injectable({
      providedIn: 'root'
    })
    export class UsercontactService {

      usercontacts: UserContact[] = [{
        name:'komal yadav',
        rollno:0,
        age:24,
        gender:'Male'
      },
      {
        name:'Mohammad Sangare',
        rollno:1,
        age:25,
        gender:'Male'
      },
      {
        name:'Indu yadav',
        rollno:2,
        age:23,
        gender:'Female'
      }];

      create(usercontact: UserContact) {
        const itemIndex = this.usercontacts.length;
        usercontact.rollno = this.getnextId();
        console.log(usercontact);
        this.usercontacts[itemIndex] = usercontact;
      }

      delete(usercontact: UserContact) {
        this.usercontacts.splice(this.usercontacts.indexOf(usercontact), 1);
      }

      update(usercontact: UserContact) {
        const itemIndex = this.usercontacts.findIndex(item => item.rollno === usercontact.rollno);
        console.log(itemIndex);
        this.usercontacts[itemIndex] = usercontact;
      }

      getall(): UserContact[] {
        console.log('usercontactservice:getall');
        console.log(this.usercontacts);
        return this.usercontacts;
      }

      reorderUserContacts(usercontact: UserContact) {
        console.log('Zur Info:', usercontact);
        this.usercontacts = this.usercontacts
          .map(uc => uc.rollno === usercontact.rollno ? usercontact : uc)
          .sort((a, uc) => uc.rollno - uc.rollno);
      }

      getUserById(rollno: number) {
        console.log(rollno);
        const itemIndex = this.usercontacts.findIndex(item => item.rollno === rollno);
        console.log(itemIndex);
        return this.usercontacts[itemIndex];
      }

      getnextId(): number {
        let highest = 0;
        this.usercontacts.forEach(function (item) {
          if (highest === 0) {
            highest = item.rollno;
          }
          if (highest < item.rollno) {
            highest = item.rollno;
          }
        });
        return highest + 1;
      }
    }
