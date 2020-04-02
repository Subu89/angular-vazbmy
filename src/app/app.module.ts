import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NgforExampleComponent } from './ngfor-example/ngfor-example.component';
import { NgforGroupedExampleComponent } from './ngfor-grouped-example/ngfor-grouped-example.component';
import { NgifExampleComponent } from './ngif-example/ngif-example.component';
import { NgSwitchExampleComponent } from './ng-switch-example/ng-switch-example.component';
import { NgstyleExampleComponent } from './ngstyle-example/ngstyle-example.component';
import { NgclassExampleComponent } from './ngclass-example/ngclass-example.component';
import { NgnonbindableExampleComponent } from './ngnonbindable-example/ngnonbindable-example.component';
import { RecentArticlesComponent } from './recent-articles/recent-articles.component';
import { CardhoverDirective } from './cardhover.directive';
import { JokeComponent } from './joke/joke.component';
import { JokeListComponent } from './joke-list/joke-list.component';
import { RxjsExampleComponent } from './rxjs-example/rxjs-example.component';
import { FormAppComponent } from './form-app/form-app.component';
import { PipeBuiltinsComponent } from './pipe-builtins/pipe-builtins.component';
import { AsyncPipeComponent } from './async-pipe/async-pipe.component';
import { DefaultImaagePipe } from './default-imaage.pipe';
import { ModelFormComponent } from './model-form/model-form.component';
import { ReactiveModelFormComponent } from './reactive-model-form/reactive-model-form.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { HttpExampleComponent } from './http-example/http-example.component';
import { SearchService } from './search.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule ],
  declarations: [ AppComponent, HelloComponent, NgforExampleComponent, NgforGroupedExampleComponent, NgifExampleComponent, NgSwitchExampleComponent, NgstyleExampleComponent, NgclassExampleComponent, NgnonbindableExampleComponent, RecentArticlesComponent, CardhoverDirective, JokeComponent, JokeListComponent, RxjsExampleComponent, FormAppComponent, PipeBuiltinsComponent, AsyncPipeComponent, DefaultImaagePipe, ModelFormComponent, ReactiveModelFormComponent, TemplateFormComponent, HttpExampleComponent ],
  bootstrap:    [ AppComponent ],
  providers: [SearchService]
})
export class AppModule { }
