import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HomeService } from './home.service';
import { HttpModule } from '@angular/http';
import { MatDatepickerModule, MatFormFieldModule, MatNativeDateModule, MatInputModule } from '@angular/material';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MdCardModule} from "@angular2-material/card";
import { NavbarComponent } from './navbar/navbar.component';
import { ContactComponent } from './contact/contact.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import {CommonModule} from '@angular/common';
import { EventsComponent } from './events/events.component';
import { InnerWebComponent } from './inner-web/inner-web.component';
import { AnnouncementsComponent } from './announcements/announcements.component';
import { AbouteditComponent } from './aboutedit/aboutedit.component';
import { ContactinformationeditComponent } from './contactinformationedit/contactinformationedit.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    AboutComponent,
    ContactComponent,
    PostDetailComponent,
    LoginComponent,
    FooterComponent,
    EventsComponent,
    InnerWebComponent,
    AnnouncementsComponent,
    AbouteditComponent,
    ContactinformationeditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MdCardModule,
    MatDatepickerModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatNativeDateModule,
    FlexLayoutModule,
    MdCardModule,
    CommonModule,
    RouterModule.forRoot([{
      path: '',
      component: HomeComponent,
      pathMatch: 'full'

    },
      {
        path: 'about',
        component: AboutComponent,
        pathMatch: 'full'
      },
      {
        path: 'contact',
        component: ContactComponent,
        pathMatch: 'full'
      },
      {
        path: 'postdetail/:id',
        component: PostDetailComponent,
        pathMatch: 'full'
      },
      {
        path: 'login',
        component: LoginComponent,
        pathMatch: 'full'
      },
      {
        path: 'events',
        component: EventsComponent,
        pathMatch: 'full'
      },
      {
        path: 'innerweb',
        component: InnerWebComponent,
        pathMatch: 'full'
      },
      {
        path: 'announcements',
        component: AnnouncementsComponent,
        pathMatch: 'full'
      },
      {
        path: 'aboutedit',
        component: AbouteditComponent,
        pathMatch: 'full'
      },
      {
        path: 'contactinformationedit',
        component: ContactinformationeditComponent,
        pathMatch: 'full'
      }

    ])
  ],
  providers: [HomeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
