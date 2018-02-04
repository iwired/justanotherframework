import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppRoutingModule }     from './app-routing.module';

import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { ItemDetailComponent }  from './item-detail/item-detail.component';
import { ItemsComponent }      from './items/items.component';
import { ItemSearchComponent }  from './item-search/item-search.component';
import { ItemService }          from './item.service';
import { MessageService }       from './message.service';
import { MessagesComponent }    from './messages/messages.component';



// The HttpClientInMemoryWebApiModule module intercepts HTTP requests
// and returns simulated server responses.
// Remove it when a real server is ready to receive requests.

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
  InMemoryDataService, { dataEncapsulation: false }
)
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    ItemsComponent,
    ItemDetailComponent,
    MessagesComponent, 
    ItemSearchComponent
  ],
  providers: [ ItemService, MessageService ],
  bootstrap: [ AppComponent ]
})
  
  

export class AppModule { }
