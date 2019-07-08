import * as tslib_1 from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//modulos do firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
//configurações do firebase
import { environment } from '../environments/environment';
import { EditComponent } from './atendimento/edit/edit.component';
import { ListComponent } from './atendimento/list/list.component';
let AppModule = class AppModule {
};
AppModule = tslib_1.__decorate([
    NgModule({
        declarations: [
            AppComponent,
            EditComponent,
            ListComponent
        ],
        imports: [
            BrowserModule,
            AppRoutingModule,
            FormsModule,
            AngularFireModule.initializeApp(environment.firebase),
            AngularFireDatabaseModule
        ],
        providers: [],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map