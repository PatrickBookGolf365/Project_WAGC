import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatSidenav, MatBottomSheet } from '@angular/material';
import { Hole, MontgomorieService } from '../services/montgomorie.service';
import { ActivatedRoute, ParamMap, Router, Event, NavigationEnd, NavigationStart } from '@angular/router';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { MapService } from '../services/map.service';


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  animations: [
  trigger('listAnimation', [
    transition('* => *', [ // each time the binding value changes
      query(':leave', [
        stagger(100, [
          animate('0.5s', style({ opacity: 0 }))
        ])
      ]),
      query(':enter', [
        style({ opacity: 0 }),
        stagger(100, [
          animate('0.5s', style({ opacity: 1 }))
        ])
      ])
    ])
  ])
]
})
export class SidenavComponent implements OnInit {

  @ViewChild('sidenav') sidenav: MatSidenav;

  hole$: Observable<Hole[]>;

  hole;
  reason;
  selectedId: number;
  showIndicator = true;

  constructor(private _mont: MontgomorieService,
              private _map: MapService,
              private _route: ActivatedRoute,
              private route: Router
              ) {
            this.route.events.subscribe((routerEvent: Event) => {
              if (routerEvent instanceof NavigationStart) {
                this.showIndicator = true;
              }

            if (routerEvent instanceof NavigationEnd) {
              this.showIndicator = false;
            }
         });
        }
        // get working!

        close(reason: string) {
          this.reason = reason;
          this.sidenav.close();
        }

  ngOnInit() {
    this.hole$ = this._route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        this.selectedId = +params.get('id');
        return this._mont.getHoles();
      })
    );

    // this._route.paramMap.
    // subscribe((params: ParamMap) =>
    // this._mont.showMap(+params.get('id')));

  }
}
