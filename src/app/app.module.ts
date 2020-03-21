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

import {AdminCommentCardComponent} from './components/admin/parts/admin-part-comment-card/admin-comment-card.component';
import {AdminExhibitComponent} from './components/admin/pages/admin-exhibit/admin-exhibit.component';
import {AdminNewExhibitComponent} from './components/admin/pages/admin-new-exhibit/admin-new-exhibit.component';
import {AdminStatisticsComponent} from './components/admin/pages/admin-statistics/admin-statistics.component';
import {AdminExpositionComponent} from './components/admin/pages/admin-exposition/admin-exposition.component';
import {AdminNewExpositionComponent} from './components/admin/pages/admin-new-exposition/admin-new-exposition.component';
// tslint:disable-next-line:max-line-length
import {AdminExpositionStatisticsComponent} from './components/admin/pages/admin-exposition-statistics/admin-exposition-statistics.component';
import {AdminHomeComponent} from './components/admin/pages/admin-home/admin-home.component';
import {AdminInfoPagesComponent} from './components/admin/pages/admin-info-pages/admin-info-pages.component';
import {AdminInfoPageComponent} from './components/admin/pages/admin-info-page/admin-info-page.component';
import {AdminNewInfoPageComponent} from './components/admin/pages/admin-new-info-page/admin-new-info-page.component';
import {AdminLoginComponent} from './components/admin/pages/admin-login/admin-login.component';
import {AdminMuseumStatisticsComponent} from './components/admin/pages/admin-museum-statistics/admin-museum-statistics.component';
import {AdminPersonalDataComponent} from './components/admin/pages/admin-personal-data/admin-personal-data.component';
import {AdminSettingsComponent} from './components/admin/pages/admin-settings/admin-settings.component';
import {AdminSidebarComponent} from './components/admin/parts/admin-part-sidebar/admin-sidebar.component';
import {AppComponent} from './app.component';
import {AdminAlertComponent} from './components/admin/parts/admin-part-alert/admin-alert.component';
import {CommonAudioPlayerComponent} from './components/common/parts/common-audio-player/common-audio-player.component';
import {AdminBoxCardComponent} from './components/admin/parts/admin-part-box-card/admin-box-card.component';
import {CommonCookieBannerComponent} from './components/common/parts/common-cookie-banner/common-cookie-banner.component';
import {CommonErrorComponent} from './components/common/pages/common-error/common-error.component';
import {CommonExhibitCardComponent} from './components/common/parts/common-exhibit-card/common-exhibit-card.component';
import {CommonExpositionCardComponent} from './components/common/parts/common-exposition-card/common-exposition-card.component';
import {AdminImageDetailsComponent} from './components/admin/parts/admin-part-image-details/admin-image-details.component';
import {AdminSpinnerComponent} from './components/admin/parts/admin-part-spinner/admin-spinner.component';
import {AdminQrCodeComponent} from './components/admin/parts/admin-part-qr-code/admin-qr-code.component';
import {CommonVideoPlayerComponent} from './components/common/parts/common-video-player/common-video-player.component';
import {UserAppBarComponent} from './components/user/parts/user-app-bar/user-app-bar.component';
import {CommentComponent} from './user/comment/comment.component';
import {ExhibitComponent} from './user/exhibit/exhibit.component';
import {ExpositionComponent} from './user/exposition/exposition.component';
import {InfopageComponent} from './user/infopage/infopage.component';
import {MuseumComponent} from './user/museum/museum.component';
import {UserComponent} from './user/user.component';
import {UsageTermsComponent} from './user/usage-terms/usage-terms.component';
import {WelcomeComponent} from './user/welcome/welcome.component';
import {environment} from '../environments/environment';
import {PrivacyPolicyComponent} from './user/privacy-policy/privacy-policy.component';
import {CarouselComponent} from './user/carousel/carousel.component';
import {ExhibitFullscreenComponent} from './user/exhibit-fullscreen/exhibit-fullscreen.component';
import {ExpositionFullscreenComponent} from './user/exposition-fullscreen/exposition-fullscreen.component';
import {MuseumFullscreenComponent} from './user/museum-fullscreen/museum-fullscreen.component';
import {SiteplanFullscreenComponent} from './user/siteplan-fullscreen/siteplan-fullscreen.component';
import {ImprintComponent} from './user/imprint/imprint.component';
import {AdminMuseumComponent} from './components/admin/pages/admin-museum/admin-museum.component';
import {AdminHeaderComponent} from './components/admin/parts/admin-part-header/admin-header.component';

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
  {path: 'admin', component: AdminLoginComponent},
  {path: 'admin/museum', component: AdminMuseumComponent},
  {path: 'admin/home', component: AdminHomeComponent},
  {path: 'admin/exposition/new', component: AdminNewExpositionComponent},
  {path: 'admin/exposition/:id', component: AdminExpositionComponent},
  {path: 'admin/exhibit/new/:expo_id', component: AdminNewExhibitComponent},
  {path: 'admin/exhibit/:id', component: AdminExhibitComponent},
  {path: 'admin/infopages', component: AdminInfoPagesComponent},
  {path: 'admin/infopage/new', component: AdminNewInfoPageComponent},
  {path: 'admin/infopage/:id', component: AdminInfoPageComponent},
  {path: 'admin/statistics', component: AdminMuseumStatisticsComponent},
  {path: 'admin/statistics/exposition/:id', component: AdminExpositionStatisticsComponent},
  {path: 'admin/statistics/exhibit/:id', component: AdminStatisticsComponent},
  {path: 'admin/personal-data', component: AdminPersonalDataComponent},
  {path: 'admin/settings', component: AdminSettingsComponent},
  {
    path: 'user', component: UserComponent, children: [
      {path: 'usage-terms', component: UsageTermsComponent},
      {path: 'privacy-policy', component: PrivacyPolicyComponent},
      {path: 'imprint', component: ImprintComponent}
    ]
  },
  {path: '**', component: CommonErrorComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ExpositionComponent,
    ExhibitComponent,
    AdminLoginComponent,
    AdminHomeComponent,
    AdminSidebarComponent,
    AdminExpositionComponent,
    AdminExhibitComponent,
    AdminInfoPagesComponent,
    AdminPersonalDataComponent,
    AdminHomeComponent,
    AdminMuseumStatisticsComponent,
    CommentComponent,
    InfopageComponent,
    CommonErrorComponent,
    UserComponent,
    AdminNewExpositionComponent,
    AdminNewExhibitComponent,
    CommonExpositionCardComponent,
    CommonExhibitCardComponent,
    AdminBoxCardComponent,
    AdminNewInfoPageComponent,
    AdminInfoPageComponent,
    UsageTermsComponent,
    AdminExpositionStatisticsComponent,
    AdminStatisticsComponent,
    AdminCommentCardComponent,
    AdminImageDetailsComponent,
    AdminAlertComponent,
    AdminSpinnerComponent,
    AdminQrCodeComponent,
    MuseumComponent,
    CommonCookieBannerComponent,
    CommonAudioPlayerComponent,
    CommonVideoPlayerComponent,
    AdminSettingsComponent,
    UserAppBarComponent,
    PrivacyPolicyComponent,
    CarouselComponent,
    ExhibitFullscreenComponent,
    ExpositionFullscreenComponent,
    MuseumFullscreenComponent,
    SiteplanFullscreenComponent,
    ImprintComponent,
    AdminMuseumComponent,
    AdminHeaderComponent
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
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),
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
    AdminImageDetailsComponent,
    AdminSpinnerComponent,
    AdminQrCodeComponent
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    library.add(fas);
  }
}
