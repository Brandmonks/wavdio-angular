import {ChangeDetectorRef, Component, Inject, LOCALE_ID, OnDestroy, OnInit} from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import {ActivatedRoute, Router} from '@angular/router';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {CookieService} from 'ngx-cookie-service';
import {Subject} from 'rxjs';
import {debounceTime} from 'rxjs/operators';

import {CommentComponent} from '../comment/comment.component';
import {Exhibit} from '../../models/exhibit';
import {Exposition} from '../../models/exposition';
import {ExpositionContent} from '../../models/exposition-content';
import {Infopage} from '../../models/infopage';
import {Like} from '../../models/like';
import {Museum} from '../../models/museum';
import {MuseumContent} from '../../models/museum-content';
import {CookielawService} from '../../services/cookielaw.service';
import {ExhibitService} from '../../services/exhibit.service';
import {ExpositionService} from '../../services/exposition.service';
import {InfopageService} from '../../services/infopage.service';
import {MuseumService} from '../../services/museum.service';

@Component({
  selector: 'app-museum',
  templateUrl: './museum.component.html',
  styleUrls: ['./museum.component.css']
})
export class MuseumComponent implements OnInit, OnDestroy {

  infopages: Infopage[];

  mobileQuery: MediaQueryList;

  fillerNav = Array.from({length: 50}, (_, i) => `Nav Item ${i + 1}`);

  private _mobileQueryListener: () => void;

  private _success = new Subject<string>();
  alertMessage: string;

  filterNumber: number;
  likedFlag = false;

  ariaLabelFooterNavigation = 'Navigation für zurück, like und Kommentar';
  ariaLabelLikeExposition = 'Ausstellung liken';
  ariaLabelOpenComment = 'Kommentarfeld öffnen';

  exposition: Exposition;
  exhibits: Exhibit[];
  expositions: Exposition[];

  museum: Museum;

  constructor(
    @Inject(LOCALE_ID) public locale: string,
    private cookieService: CookieService,
    private modalService: NgbModal,
    public router: Router,
    private museumService: MuseumService,
    private activatedRoute: ActivatedRoute,
    private exhibitService: ExhibitService,
    private expositionService: ExpositionService,
    public cookieLawService: CookielawService,
    private infopageService: InfopageService,
    changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {

    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit() {
    this.infopageService.getInfopages().subscribe(
      infopages => this.infopages = infopages
    );

    if (this.cookieLawService.acceptedTermsOfUse()) {
      this.router.navigate(['/']);
    } else {
      this._success.subscribe((message) => this.alertMessage = message);
      this._success.pipe(
        debounceTime(5000)
      ).subscribe(() => this.alertMessage = null);

      this.museumService.getMuseums().subscribe(
        museums => {
          this.museum = museums[0];

          this.exhibitService.getExhibits().subscribe(
            exhibits => this.exhibits = exhibits
              .filter(exhibit => exhibit.active && exhibit.parent === this.museum._id)
              .sort((e1, e2) => e1.code - e2.code)
          );

          this.expositionService.getExpositions().subscribe(
            expositions => this.expositions = expositions.filter(exposition => exposition.active)
          );
        }
      );
    }
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  manualSelect() {
    for (const exposition of this.expositions) {
      if (exposition.code === this.filterNumber) {
        this.router.navigate([`/exposition/`, exposition._id]);
        return;
      }
    }
    this._success.next('Falsche Nummer');
  }

  openComment() {
    const modal = this.modalService.open(CommentComponent, {centered: true});
    modal.componentInstance.exposition = this.exposition;
  }

  likeExposition() {
    if (!this.likedFlag) {
      this.exposition.likes.push(new Like(new Date()));
      this.expositionService.updateExpositionCommentLike(this.exposition).subscribe(
        exposition => {
          this.likedFlag = true;
          this.cookieService.set(`exposition${this.exposition._id}`, 'true');
        }
      );
    }
  }

  getExpositionContent(lang: String): ExpositionContent {

    /* return localized content */

    for (const content of this.exposition.contents) {
      if (content.lang === lang) {
        return content;
      }
    }

    /* not available ? fall back to German */

    console.warn('No localized content available for locale ' + lang);

    for (const content of this.exposition.contents) {
      if (content.lang === 'de') {
        return content;
      }
    }

    /* not available ? must not happen. has to be created when constructing exposition */

    console.error('No German fallback content available');
  }

  getMuseumContent(lang: String): MuseumContent {

    /* return localized content */

    for (const content of this.museum.contents) {
      if (content.lang === lang) {
        return content;
      }
    }

    /* not available ? fall back to German */

    console.warn('No localized content available for locale ' + lang);

    for (const content of this.museum.contents) {
      if (content.lang === 'de') {
        return content;
      }
    }

    /* not available ? must not happen. has to be created when constructing exposition */

    console.error('No German fallback content available');
  }
}
