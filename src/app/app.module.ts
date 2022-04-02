import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { TimerService } from './timer.service';
import { MateriasComponent } from './materias/materias.component';
import { ContadorComponent } from './contador/contador.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'materias', component: MateriasComponent },
      { path: 'contador', component: ContadorComponent },
    ]),
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    HomeComponent,
    MateriasComponent,
    ContadorComponent,
  ],
  bootstrap: [AppComponent],
  providers: [TimerService],
})
export class AppModule {}
