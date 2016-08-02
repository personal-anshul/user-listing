//decorator - Component : a function
//module - angular2/core : contain decorator 'Component'
import {Component} from 'angular2/core';
import {DetailsComponent} from './user-details.component';
import {AddUserComponent} from './add-user.component';
import {ListingService} from '../service/listing.service.js';
import {DeleteService} from '../service/delete.service.js';
import {DetailService} from '../service/details.service.js';
import {FilterArrayPipe} from '../pipes/search-pipe.js';

@Component({
  selector: 'list',
  templateUrl: 'template/listing.html',
  directives: [DetailsComponent, AddUserComponent],
  pipes: [FilterArrayPipe],
  providers: [ListingService, DeleteService, DetailService]
})

export class ListingComponent {
  hiddenAddUserForm = true;
  title = "User List";
  error = "";
  dataList: string[];
   public detailData: string[];
  result = "";

  constructor(private _listing: ListingService, private _deletion: DeleteService, private _details: DetailService) {
    this.getList();
  }

  getList(){
    var region = "listAll";
    this.result = "";
    this.detailData = null;
    this._listing.getList(region)
    .subscribe(
      data => this.dataList = data,
      error => this.error = "API Call is invalid."
    );
  }

  deleteItem(id: string){
    var region = "delete/" + id;
    this.result = "";
    this.detailData = null;
    this._deletion.deleteItem(region)
    .subscribe(
      data => this.result = data.statusText,
      error => this.error = "API Call is invalid."
    );
    this.getList();
  }

  itemDetails(id: string) {
    var region = id;
    this.result = "";
    window.scrollTo(0, document.body.scrollHeight);
    this._details.itemDetail(region)
    .subscribe(
      data => this.detailData = data,
      error => this.error = "API Call is invalid."
    );
  }

}
