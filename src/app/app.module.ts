    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';

    import { AppComponent } from './app.component';
    import { DashboardComponent } from './dashboard/dashboard.component';
    import { AddUsercontactComponent } from './add-usercontact/add-usercontact.component';
    import { EditUsercontactComponent } from './edit-usercontact/edit-usercontact.component';
    import { ReactiveFormsModule } from '@angular/forms';
    import { UsercontactComponent } from './usercontact/usercontact.component';
    import { AppRoutingModule } from './app-routing.module';
    

    @NgModule({
      declarations: [
        AppComponent,
        AddUsercontactComponent,
        DashboardComponent,
        EditUsercontactComponent,
        UsercontactComponent
      ],
      imports: [
        BrowserModule,
        ReactiveFormsModule,
        AppRoutingModule
      ],
      providers: [],
      bootstrap: [AppComponent]
    })
    export class AppModule { }
