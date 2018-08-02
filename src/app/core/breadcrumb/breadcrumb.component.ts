import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router, Params } from '@angular/router';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit {
  public breadcrumbs: any[] = [
    {
      path: 'home',
      component: 'Home'
    }, {
      path: 'coursesList',
      component: 'Courses List'
    }
  ];
  private itemId: string;

  constructor(private route: ActivatedRoute) {
    // console.log(this.route)
    // this.route.params.subscribe((data) => {
    //   // let itemId = data['id'];
    //   console.log(this.route);
    //   console.log(data);
    // })
    // this.route.queryParams.subscribe((data) => {
    //   console.log(data)
    // })
  }

  ngOnInit() {
    //  this.route.params.subscribe((data) => {
    //   let itemId = data['id'];
      // console.log(this.route);
    //   console.log(data);
    // })
    this.route.queryParams.subscribe((data) => {
      if (data['itemId'] && this.breadcrumbs.length >= 2) {
        this.breadcrumbs.push( {
          path: 'coursesList/id',
          component: data['itemId']
        });
      } else if (this.breadcrumbs.length > 2) {
        this.breadcrumbs.pop();
      }

      // data['itemId'] : null;
      // console.log(this.route);
      // console.log(this.itemId);
    });
  }

}
