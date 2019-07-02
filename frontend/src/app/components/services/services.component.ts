import { Component, OnInit } from '@angular/core';

import { ServiceService } from '../../services/service.service';
import {NgForm} from '@angular/forms';
import { Service } from 'src/app/models/service';

declare var M: any;
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
  providers: [ServiceService]
})
export class ServicesComponent implements OnInit {

  constructor(private serviceService: ServiceService) { }

  ngOnInit() {
    this.getServices();
  }

  addService(form: NgForm){
    if(form.value._id) {
      this.serviceService.putService(form.value)
      .subscribe(res =>{
        this.resetForm(form);
        M.toast({html: 'Updated Successfuly!'})     
        this.getServices();
      })
    }else{
      this.serviceService.postService(form.value)
      .subscribe(res =>{
        this.resetForm(form);
        M.toast({html: 'Save Successfuly!'})     
        this.getServices();
      });  
    }
  }

  getServices(){
    this.serviceService.getServices()
    .subscribe(res => {
    this.serviceService.services = res as Service[];
    console.log(res);
    });
  }

  editService(service: Service){
    this.serviceService.selectedService = service;
  }

  deleteService(_id: string){
    if(confirm('Are you sure you want to delete it?')) {
      this.serviceService.deleteService(_id)
      .subscribe(res => {
        this.getServices();
        M.toast({html: 'Deleted successfully'});
      });  
    }
  }

  resetForm(form?: NgForm ){
    if (form){
      form.reset();
      this.serviceService.selectedService = new Service();
    }
  }
}
