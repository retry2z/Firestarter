import { Component, OnInit } from '@angular/core';
import { SeoService } from 'src/app/services/seo.service';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(private seo: SeoService) { }

  ngOnInit() {
    this.seo.generateTags({
      title: 'Kanban demo',
      description: 'home page: author Retry2z'
    });
  }
}
 