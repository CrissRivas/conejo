import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './pages/main/main.component';
import { IntroComponent } from './components/intro/intro.component';
import { StrengthsComponent } from './components/strengths/strengths.component';
import { UxComponent } from './components/ux/ux.component';
import { UiComponent } from './components/ui/ui.component';
import { FrontendComponent } from './components/frontend/frontend.component';
import { BackendComponent } from './components/backend/backend.component';
import { ProdComponent } from './components/prod/prod.component';
import { MoreComponent } from './components/more/more.component';


import { MatSliderModule } from '@angular/material/slider';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { SwiperModule } from 'swiper/angular';
import {MatCardModule} from '@angular/material/card';
import { MenuComponent } from './components/menu/menu.component';
import { SliderComponent } from './components/slider/slider.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    IntroComponent,
    StrengthsComponent,
    UxComponent,
    UiComponent,
    FrontendComponent,
    BackendComponent,
    ProdComponent,
    MoreComponent,
    MenuComponent,
    SliderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    SwiperModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
