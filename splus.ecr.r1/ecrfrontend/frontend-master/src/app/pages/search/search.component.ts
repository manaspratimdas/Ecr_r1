import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { SearchService } from './search.service';
import { LocalDataSource, ViewCell } from 'ng2-smart-table';

@Component({
  selector: 'search-table',
  templateUrl: './search.html',
  styleUrls: ['./search.scss']
})
  
export class Search {

  types: any[]=[
                {id:1,name:'10'},
                {id:2,name:'20'}
    ];
  
  countries: any[]=[
                {id:1,name:'india'},
                {id:2,name:'china'}
    ];
  
  ports: any[]=[
                {id:1,name:'port1'},
                {id:2,name:'port2'}
    ];
  
  companies: any[]=[
                {id:1,name:'shipco'},
                {id:2,name:'scan-shipping'}
    ];
  
  query: string = '';
  selectedRows: number[]=[];
  
  selectedType: string ;
  selectedCountry: string;
  selectedPort: string;
  selectedCompany: string;
  
  settings = {
    selectMode: 'multi',
    actions: false,
    columns: {
//      id: {
//        title: 'Select',
//        type: 'custom',
//        renderComponent: CheckboxViewComponent
//      },
      id: {
        title: 'ID',
        filer: false,
        type: 'number'
      },
      firstName: {
        title: 'First Name',
        filer: false,
        type: 'string'
      },
      lastName: {
        title: 'Last Name',
        filer: false,
        type: 'string'
      },
      username: {
        title: 'Username',
        filer: false,
        type: 'string'
      },
      email: {
        title: 'E-mail',
        filer: false,
        type: 'string'
      },
      age: {
        title: 'Age',
        filer: false,
        type: 'number'
      }
    }
  };

  source: LocalDataSource = new LocalDataSource();
  
//  constructor(protected service: SearchService) {
//    this.service.getData().then((data) => {
//      this.source.load(data);
//    });
//  }
  
  constructor(protected service: SearchService) {
//    this.source.setFilter([],false);
    this.service.getData()
      .then(
          data => {
             this.source.load(data);
          },
          error => {
          });
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
  
  onRowSelect(event): void {
    debugger;
    
    let id = event.data['id'];
    var index = this.selectedRows.indexOf(id);
    console.log("selected index :" + index);
    if(index != -1) {
      this.selectedRows.splice(index, id);
    } else {
      this.selectedRows.push(id);
    }
    console.log(this.selectedRows);
    
  }
  
  onTypeChange(event:Event): void {
    this.selectedType = (<HTMLSelectElement>event.srcElement).value; 
    console.log(this.selectedType);
  }
  
  onCountryChange(event:Event): void {
    this.selectedCountry = (<HTMLSelectElement>event.srcElement).value; 
    console.log(this.selectedCountry);
  }
  
  onPortChange(event:Event): void {
    this.selectedPort = (<HTMLSelectElement>event.srcElement).value; 
    console.log(this.selectedPort);
  }
  
  onCompanyChange(event:Event): void {
    this.selectedCompany = (<HTMLSelectElement>event.srcElement).value; 
    console.log(this.selectedCompany);
  }
  
}

