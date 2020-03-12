import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {
  MatButtonModule,
  MatListModule,
  MatMenuModule,
  MatSidenavModule,
  MatTabsModule,
  MatToolbarModule
} from '@angular/material';
import {MatIconModule} from '@angular/material/icon';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule, Routes} from '@angular/router';
import {ServiceWorkerModule} from '@angular/service-worker';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {library} from '@fortawesome/fontawesome-svg-core';
import {fas} from '@fortawesome/free-solid-svg-icons';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {CookieService} from 'ngx-cookie-service';
import {LoggerModule, NgxLoggerLevel} from 'ngx-logger';
import {MarkdownModule} from 'ngx-markdown';
import {SlickCarouselModule} from 'ngx-slick-carousel';
import {NgxPrintModule} from 'ngx-print';
import {NgxQRCodeModule} from 'ngx-qrcode2';

import {AdminComponent} from './admin/admin.component';
import {CommentCardComponent} from './admin/comment-card/comment-card.component';
import {AdminExhibitComponent} from './admin/exhibit/admin-exhibit.component';
import {NewAdminExhibitComponent} from './admin/exhibit/new/new-admin-exhibit.component';
import {ExhibitStatisticsComponent} from './admin/exhibit-statistics/exhibit-statistics.component';
import {AdminExpositionComponent} from './admin/exposition/admin-exposition.component';
import {NewAdminExpositionComponent} from './admin/exposition/new/new-admin-exposition.component';
import {ExpositionStatisticsComponent} from './admin/exposition-statistics/exposition-statistics.component';
import {HomeComponent} from './admin/home/home.component';
import {AdminInfopagesComponent} from './admin/infopages/admin-infopages.component';
import {AdminInfopageComponent} from './admin/infopages/infopage/admin-infopage.component';
import {NewAdminInfopageComponent} from './admin/infopages/infopage/new/new-admin-infopage.component';
import {LoggingComponent} from './admin/logging/logging.component';
import {LoginComponent} from './admin/login/login.component';
import {MuseumStatisticsComponent} from './admin/museum-statistics/museum-statistics.component';
import {PersonalDataComponent} from './admin/personal-data/personal-data.component';
import {SettingsComponent} from './admin/settings/settings.component';
import {SidebarComponent} from './admin/sidebar/sidebar.component';
import {AppComponent} from './app.component';
import {AlertComponent} from './helper/alert/alert.component';
import {AudioPlayerComponent} from './helper/audio-player/audio-player.component';
import {BoxCardComponent} from './helper/box-card/box-card.component';
import {CookieBannerComponent} from './helper/cookie-banner/cookie-banner.component';
import {ErrorPageComponent} from './helper/error-page/error-page.component';
import {ExhibitCardComponent} from './helper/exhibit-card/exhibit-card.component';
import {ExpositionCardComponent} from './helper/exposition-card/exposition-card.component';
import {ImageDetailsComponent} from './helper/image-details/image-details.component';
import {SpinnerComponent} from './helper/spinner/spinner.component';
import {QrcodeComponent} from './helper/qrcode/qrcode.component';
import {VideoPlayerComponent} from './helper/video-player/video-player.component';
import {AppBarComponent} from './user/app-bar/app-bar.component';
import {CommentComponent} from './user/comment/comment.component';
import {ExhibitComponent} from './user/exhibit/exhibit.component';
import {ExpositionComponent} from './user/exposition/exposition.component';
import {InfopageComponent} from './user/infopage/infopage.component';
import {MuseumComponent} from './user/museum/museum.component';
import {UserComponent} from './user/user.component';
import {UsageTermsComponent} from './user/usage-terms/usage-terms.component';
import {WelcomeComponent} from './user/welcome/welcome.component';
import {environment} from '../environments/environment';
import { PrivacyPolicyComponent } from './user/privacy-policy/privacy-policy.component';
import { CarouselComponent } from './user/carousel/carousel.component';
import { ExhibitFullscreenComponent } from './user/exhibit-fullscreen/exhibit-fullscreen.component';
import { ExpositionFullscreenComponent } from './user/exposition-fullscreen/exposition-fullscreen.component';
import { MuseumFullscreenComponent } from './user/museum-fullscreen/museum-fullscreen.component';
import { SiteplanFullscreenComponent } from './user/siteplan-fullscreen/siteplan-fullscreen.component';

const appRoutes: Routes = [
  {
    path: '', component: UserComponent, children: [
      {path: '', component: WelcomeComponent},
      {path: 'museum', component: MuseumComponent},
      {path: 'museum/fullscreen', component: MuseumFullscreenComponent},
      {path: 'siteplan', component: SiteplanFullscreenComponent},
      {path: 'exposition/:id', component: ExpositionComponent},
      {path: 'exposition/:id/fullscreen', component: ExpositionFullscreenComponent},
      {path: 'exhibit/:id', component: ExhibitComponent},
      {path: 'exhibit/:id/fullscreen', component: ExhibitFullscreenComponent},
      {path: 'infopage/:id', component: InfopageComponent},
    ]
  },
  {
    path: 'admin', component: AdminComponent, children: [
      {path: '', component: LoginComponent},
      {path: 'home', component: HomeComponent},
      {path: 'exposition/new', component: NewAdminExpositionComponent},
      {path: 'exposition/:id', component: AdminExpositionComponent},
      {path: 'exhibit/new/:expo_id', component: NewAdminExhibitComponent},
      {path: 'exhibit/:id', component: AdminExhibitComponent},
      {path: 'infopages', component: AdminInfopagesComponent},
      {path: 'infopage/new', component: NewAdminInfopageComponent},
      {path: 'infopage/:id', component: AdminInfopageComponent},
      {path: 'statistics', component: MuseumStatisticsComponent},
      {path: 'statistics/exposition/:id', component: ExpositionStatisticsComponent},
      {path: 'statistics/exhibit/:id', component: ExhibitStatisticsComponent},
      {path: 'logging', component: LoggingComponent},
      {path: 'personal-data', component: PersonalDataComponent},
      {path: 'settings', component: SettingsComponent}
    ]
  },
  {
    path: 'user', component: UserComponent, children: [
      {path: 'usage-terms', component: UsageTermsComponent},
      {path: 'privacy-policy', component: PrivacyPolicyComponent}
    ]
  },
  {path: '**', component: ErrorPageComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ExpositionComponent,
    ExhibitComponent,
    AdminComponent,
    LoginComponent,
    HomeComponent,
    SidebarComponent,
    AdminExpositionComponent,
    AdminExhibitComponent,
    LoggingComponent,
    AdminInfopagesComponent,
    PersonalDataComponent,
    HomeComponent,
    MuseumStatisticsComponent,
    CommentComponent,
    InfopageComponent,
    ErrorPageComponent,
    UserComponent,
    NewAdminExpositionComponent,
    NewAdminExhibitComponent,
    ExpositionCardComponent,
    ExhibitCardComponent,
    BoxCardComponent,
    NewAdminInfopageComponent,
    AdminInfopageComponent,
    UsageTermsComponent,
    ExpositionStatisticsComponent,
    ExhibitStatisticsComponent,
    CommentCardComponent,
    ImageDetailsComponent,
    AlertComponent,
    SpinnerComponent,
    QrcodeComponent,
    MuseumComponent,
    CookieBannerComponent,
    AudioPlayerComponent,
    VideoPlayerComponent,
    SettingsComponent,
    AppBarComponent,
    PrivacyPolicyComponent,
    CarouselComponent,
    ExhibitFullscreenComponent,
    ExpositionFullscreenComponent,
    MuseumFullscreenComponent,
    SiteplanFullscreenComponent
  ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        RouterModule.forRoot(
            appRoutes,
            {onSameUrlNavigation: 'reload', enableTracing: false} // <-- debugging purposes only
        ),
        NgbModule,
        SlickCarouselModule,
        FontAwesomeModule,
        NgxChartsModule,
        BrowserAnimationsModule,
        NgxQRCodeModule,
        NgxPrintModule,
        MatTabsModule,
        MatToolbarModule,
        MatSidenavModule,
        MatListModule,
        MatIconModule,
        MatButtonModule,
        MatMenuModule,
        ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
        LoggerModule.forRoot({
          level: environment.production ? NgxLoggerLevel.OFF : NgxLoggerLevel.TRACE,
          serverLogLevel: environment.production ? NgxLoggerLevel.OFF : NgxLoggerLevel.TRACE,
          serverLoggingUrl: '/api/v2/logs'
        }),
        MarkdownModule.forRoot()
    ],
  exports: [
    CommentComponent
  ],
  entryComponents: [
    CommentComponent,
    ImageDetailsComponent,
    SpinnerComponent,
    QrcodeComponent
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    library.add(fas);
  }
}
