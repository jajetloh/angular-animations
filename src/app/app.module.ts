import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AnimatedComponent } from './animated/animated.component'

@NgModule({
    declarations: [
        AppComponent,
        AnimatedComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
