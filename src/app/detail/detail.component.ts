import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor(private testserv:TestService) { }

  ngOnInit(): void {

  }
   printdate() {
    alert(this.testserv.maps())

    
  }

}
