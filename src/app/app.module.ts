import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountsComponent } from './accounts/accounts.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { SecuredRequestFormComponent } from './secured-request-form/secured-request-form.component';
import { ProfileComponent } from './profile/profile.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { PurchaseDetailsComponent } from './purchase-details/purchase-details.component';
import { ModelsComponent } from './models/models.component';
import { CardCatalogueComponent } from './card-catalogue/card-catalogue.component';

@NgModule({
  declarations: [
    AppComponent,
    AccountsComponent,
    UserComponent,
    HomeComponent,
    RegisterComponent,
    SecuredRequestFormComponent,
    ProfileComponent,
    AdminComponent,
    LoginComponent,
    PurchaseDetailsComponent,
    ModelsComponent,
    CardCatalogueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
