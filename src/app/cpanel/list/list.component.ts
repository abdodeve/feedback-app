import { Component, OnInit } from '@angular/core';
import * as dialogs from "tns-core-modules/ui/dialogs";


@Component({
  selector: 'ns-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  moduleId: module.id,
})
export class ListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSayHello(): void {
    dialogs.alert("Your message").then(()=> {
      console.log("Dialog closed!");
    });
  }

}
