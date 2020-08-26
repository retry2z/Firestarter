import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { SeoService } from 'src/app/services/seo.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.scss']
})
export class DetailPageComponent implements OnInit {
  customerID: string;
  customer: Observable<any>;

  constructor(
    private route: ActivatedRoute,
    private db: AngularFirestore,
    private seo: SeoService,
  ) { }

  ngOnInit(): void {
    this.customerID = this.route.snapshot.paramMap.get('id');

    this.customer = this.db
      .collection('customers')
      .doc<any>(this.customerID)
      .valueChanges()
      .pipe(
        tap(customer => {
          this.seo.generateTags({
            title: customer.name,
            description: customer.bio,
            image: customer.image,
          })
        })
      )

  }

}
