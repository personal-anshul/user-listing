import {Component} from 'angular2/core'
import {ListingComponent} from './listing.component'

@Component({
  selector: 'app',
  templateUrl: 'template/app.html',
  directives: [ListingComponent]
})

export class AppComponent { }
