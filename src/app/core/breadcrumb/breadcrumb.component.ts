import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit {
  breadcrumbs: any[] = [
    {
      path: 'home',
      component: 'Home'
    }, {
      path: 'coursesList',
      component: 'Courses List'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
