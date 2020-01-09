import {Component, ElementRef, Inject, LOCALE_ID, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {CookieService} from 'ngx-cookie-service';

import {CommentComponent} from '../comment/comment.component';
import {Exhibit} from '../../models/exhibit';
import {ExhibitContent} from '../../models/exhibit-content';
import {Exposition} from '../../models/exposition';
import {Like} from '../../models/like';
import {Museum} from '../../models/museum';
import {MuseumContent} from '../../models/museum-content';
import {CookielawService} from '../../services/cookielaw.service';
import {ExhibitService} from '../../services/exhibit.service';
import {ExpositionService} from '../../services/exposition.service';
import {InfopageService} from '../../services/infopage.service';
import {MediaplayerService} from '../../services/mediaplayer.service';
import {MuseumService} from '../../services/museum.service';

@Component({
  selector: 'app-exhibit',
  templateUrl: './exhibit.component.html',
  styleUrls: ['./exhibit.component.css'],
  providers: [MediaplayerService]
})
export class ExhibitComponent implements OnInit {

  isNavbarCollapsed = true;

  ariaLabelBurgerMenu = 'Menü öffnen';
  ariaLabelFooterNavigation = 'Navigation für zurück, like und Kommentar';
  ariaLabelLikeExhibit = 'Exponat liken';
  ariaLabelPrevExhibit = 'Zum vorherigen Exponat springen';
  ariaLabelSearchExhibit = 'Exponat mit eigegebener Nummer suchen';
  ariaLabelNextExhibit = 'Zum nächsten Exponat springen';
  ariaLabelOpenComment = 'Kommentarfeld öffnen';
  ariaLabelBackToExposition = 'Zurück zur Übersicht über die Ausstellung';
  ariaLabelInputExhibitnumber = 'Exponatnummer eingeben';

  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    infinite: true
  };

  exhibits: Exhibit[];
  exhibit: Exhibit;
  exposition: Exposition;
  infopages = [];
  museum: Museum;

  likedFlag = false;
  filterNumber: number;

  videoplayer: ElementRef;
  time: ElementRef;
  progress: ElementRef;

  audioplayer: ElementRef;
  timeAudio: ElementRef;
  progressAudio: ElementRef;

  @ViewChild('videoplayer', {static: false}) set content(content: ElementRef) {
    this.videoplayer = content;
  }

  @ViewChild('time', {static: false}) set content3(content: ElementRef) {
    this.time = content;
  }

  @ViewChild('progress', {static: false}) set content4(content: ElementRef) {
    this.progress = content;
  }

  @ViewChild('audioplayer', {static: false}) set content5(content: ElementRef) {
    this.audioplayer = content;
  }

  @ViewChild('timeAudio', {static: false}) set content7(content: ElementRef) {
    this.timeAudio = content;
  }

  @ViewChild('progressAudio', {static: false}) set content8(content: ElementRef) {
    this.progressAudio = content;
  }

  constructor(
    @Inject(LOCALE_ID) public locale: string,
    private activatedRoute: ActivatedRoute,
    private modalService: NgbModal,
    private infopageService: InfopageService,
    private exhibitService: ExhibitService,
    private expositionService: ExpositionService,
    private museumService: MuseumService,
    private mediaplayerService: MediaplayerService,
    public router: Router,
    private cookieService: CookieService,
    public cookieLawService: CookielawService) {
    // this code tricks the router to always reload
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };

    // this code tricks the router to always reload
    this.router.events.subscribe((evt) => {
      if (evt instanceof NavigationEnd) {
        this.router.navigated = false;
        window.scrollTo(0, 0);
      }
    });
  }

  ngOnInit() {
    if (this.cookieLawService.acceptedTermsOfUse()) {
      this.router.navigate(['/']);
    } else {
      this.infopageService.getInfopages().subscribe(
        infopages => this.infopages = infopages
      );

      this.activatedRoute.params.subscribe(params => {
        const exhibitId = params.id;

        // this.exhibitService.getExhibit(exhibitId).subscribe(
        //   exhibit => {
        //     this.exhibit = exhibit;
        //     this.likedFlag = this.cookieService.get(`exhibit${this.exhibit._id}`) === 'true';
        //   }
        // );

        this.museumService.getMuseums().subscribe(
          museums => {
            this.museum = museums[0];
          }
        );

        this.exhibitService.getExhibits().subscribe(
          exhibits => {
            this.exhibits = exhibits;
            this.exhibit = exhibits.filter(exhibit => exhibitId === exhibit._id)[0];
            if (this.exhibit.parentModel === 'Exposition') {
              this.expositionService.getExposition(this.exhibit.parent).subscribe(
                exposition => this.exposition = exposition
              );
            } else {
              this.exposition = null;
            }
            this.filterNumber = this.exhibit.code;
            this.likedFlag = this.cookieService.get(`exhibit${this.exhibit._id}`) === 'true';
          }
        );
      });
    }
  }

  likeExhibit() {
    if (!this.likedFlag) {
      this.exhibit.likes.push(new Like(new Date()));
      this.exhibitService.updateExhibitCommentLike(this.exhibit).subscribe(
        exhibit => {
          this.likedFlag = true;
          this.cookieService.set(`exhibit${this.exhibit._id}`, 'true');
        }
      );
    }
  }

  openComment() {
    const modal = this.modalService.open(CommentComponent, {centered: true});
    modal.componentInstance.exhibit = this.exhibit;
  }

  openTranscript(content) {
    this.modalService.open(content);
  }

  nextExhibit() {
    for (let i = this.exhibit.code + 1; i < 1000; i++) {
      for (const exhibit of this.exhibits) {
        if (exhibit.code === i && exhibit.active) {
          this.router.navigate([`/exhibit/`, exhibit._id]);
          return;
        }
      }
    }
  }

  prevExhibit() {
    for (let i = this.exhibit.code - 1; i > 99; i--) {
      for (const exhibit of this.exhibits) {
        if (exhibit.code === i && exhibit.active) {
          this.router.navigate([`/exhibit/`, exhibit._id]);
          return;
        }
      }
    }
  }

  manualSelect() {
    for (const exhibit of this.exhibits) {
      if (exhibit.code === this.filterNumber) {
        this.router.navigate([`/exhibit/`, exhibit._id]);
        return;
      }
    }
  }

  getExhibitContent(lang: String): ExhibitContent {

    /* return localized content */

    for (const content of this.exhibit.contents) {
      if (content.lang === lang) {
        return content;
      }
    }

    /* not available ? fall back to German */

    console.warn('No localized content available for locale ' + lang);

    for (const content of this.exhibit.contents) {
      if (content.lang === 'de') {
        return content;
      }
    }

    /* not available ? must not happen. has to be created when constructing exhibit */

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
