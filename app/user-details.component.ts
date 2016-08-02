import {Component, Input} from 'angular2/core'

@Component({
  selector: 'user-details',
  templateUrl: 'template/user-details.html'
})

export class DetailsComponent {
  @Input() dataDetails;
}
