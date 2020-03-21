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

import {AdminAlertComponent} from './components/admin/parts/admin-part-alert/admin-alert.component';
import {AdminBoxCardComponent} from './components/admin/parts/admin-part-box-card/admin-box-card.component';
import {AdminCommentCardComponent} from './components/admin/parts/admin-part-comment-card/admin-comment-card.component';
import {AdminComponent} from './components/admin/admin.component';
import {AdminExhibitComponent} from './components/admin/pages/admin-exhibit/admin-exhibit.component';
import {AdminExpositionComponent} from './components/admin/pages/admin-exposition/admin-exposition.component';
import {AdminExpositionStatsComponent} from './components/admin/pages/admin-exposition-stats/admin-exposition-stats.component';
import {AdminHeaderComponent} from './components/admin/parts/admin-part-header/admin-header.component';
import {AdminHomeComponent} from './components/admin/pages/admin-home/admin-home.component';
import {AdminImageDetailsComponent} from './components/admin/parts/admin-part-image-details/admin-image-details.component';
import {AdminInfoPageComponent} from './components/admin/pages/admin-info-page/admin-info-page.component';
import {AdminInfoPagesComponent} from './components/admin/pages/admin-info-pages/admin-info-pages.component';
import {AdminLoginComponent} from './components/admin/pages/admin-login/admin-login.component';
import {AdminMuseumComponent} from './components/admin/pages/admin-museum/admin-museum.component';
import {AdminMuseumStatsComponent} from './components/admin/pages/admin-museum-stats/admin-museum-stats.component';
import {AdminNewExhibitComponent} from './components/admin/pages/admin-new-exhibit/admin-new-exhibit.component';
import {AdminNewExpositionComponent} from './components/admin/pages/admin-new-exposition/admin-new-exposition.component';
import {AdminNewInfoPageComponent} from './components/admin/pages/admin-new-info-page/admin-new-info-page.component';
import {AdminPersonalDataComponent} from './components/admin/pages/admin-personal-data/admin-personal-data.component';
import {AdminQrCodeComponent} from './components/admin/parts/admin-part-qr-code/admin-qr-code.component';
import {AdminSettingsComponent} from './components/admin/pages/admin-settings/admin-settings.component';
import {AdminSidebarComponent} from './components/admin/parts/admin-part-sidebar/admin-sidebar.component';
import {AdminSpinnerComponent} from './components/admin/parts/admin-part-spinner/admin-spinner.component';
import {AdminStatsComponent} from './components/admin/pages/admin-stats/admin-stats.component';
import {AppComponent} from './app.component';
import {CommonAudioPlayerComponent} from './components/common/parts/common-audio-player/common-audio-player.component';
import {CommonCookieBannerComponent} from './components/common/parts/common-cookie-banner/common-cookie-banner.component';
import {CommonErrorComponent} from './components/common/pages/common-error/common-error.component';
import {CommonExhibitCardComponent} from './components/common/parts/common-exhibit-card/common-exhibit-card.component';
import {CommonExpositionCardComponent} from './components/common/parts/common-exposition-card/common-exposition-card.component';
import {CommonVideoPlayerComponent} from './components/common/parts/common-video-player/common-video-player.component';
import {UserAppBarComponent} from './components/user/parts/user-app-bar/user-app-bar.component';
import {UserCarouselComponent} from './components/user/parts/user-carousel/user-carousel.component';
import {UserCommentComponent} from './components/user/parts/user-comment/user-comment.component';
import {UserComponent} from './components/user/user.component';
import {UserExhibitComponent} from './components/user/pages/user-exhibit/user-exhibit.component';
import {UserExhibitFullscreenComponent} from './components/user/pages/user-exhibit-fullscreen/user-exhibit-fullscreen.component';
import {UserExpositionComponent} from './components/user/pages/user-exposition/user-exposition.component';
import {UserExpositionFullscreenComponent} from './components/user/pages/user-exposition-fullscreen/user-exposition-fullscreen.component';
import {UserImprintComponent} from './components/user/pages/user-imprint/user-imprint.component';
import {UserInfoPageComponent} from './components/user/pages/user-info-page/user-info-page.component';
import {UserMuseumComponent} from './components/user/pages/user-museum/user-museum.component';
import {UserMuseumFullscreenComponent} from './components/user/pages/user-museum-fullscreen/user-museum-fullscreen.component';
import {UserPrivacyPolicyComponent} from './components/user/pages/user-privacy-policy/user-privacy-policy.component';
import {UserSitePlanFullscreenComponent} from './components/user/pages/user-site-plan-fullscreen/user-site-plan-fullscreen.component';
import {UserUsageTermsComponent} from './components/user/pages/user-usage-terms/user-usage-terms.component';
import {UserWelcomeComponent} from './components/user/pages/user-welcome/user-welcome.component';

import {environment} from '../environments/environment';

const appRoutes: Routes = [
  {
    path: '', component: UserComponent, children: [
      {path: '', component: UserWelcomeComponent},
      {path: 'museum', component: UserMuseumComponent},
      {path: 'museum/fullscreen', component: UserMuseumFullscreenComponent},
      {path: 'siteplan', component: UserSitePlanFullscreenComponent},
      {path: 'exposition/:id', component: UserExpositionComponent},
      {path: 'exposition/:id/fullscreen', component: UserExpositionFullscreenComponent},
      {path: 'exhibit/:id', component: UserExhibitComponent},
      {path: 'exhibit/:id/fullscreen', component: UserExhibitFullscreenComponent},
      {path: 'infopage/:id', component: UserInfoPageComponent},
    ]
  },
  {
    path: 'admin', component: AdminComponent, children: [
      {path: '', component: AdminLoginComponent},
      {path: 'museum', component: AdminMuseumComponent},
      {path: 'home', component: AdminHomeComponent},
      {path: 'exposition/new', component: AdminNewExpositionComponent},
      {path: 'exposition/:id', component: AdminExpositionComponent},
      {path: 'exhibit/new/:expo_id', component: AdminNewExhibitComponent},
      {path: 'exhibit/:id', component: AdminExhibitComponent},
      {path: 'infopages', component: AdminInfoPagesComponent},
      {path: 'infopage/new', component: AdminNewInfoPageComponent},
      {path: 'infopage/:id', component: AdminInfoPageComponent},
      {path: 'statistics', component: AdminMuseumStatsComponent},
      {path: 'statistics/exposition/:id', component: AdminExpositionStatsComponent},
      {path: 'statistics/exhibit/:id', component: AdminStatsComponent},
      {path: 'personal-data', component: AdminPersonalDataComponent},
      {path: 'settings', component: AdminSettingsComponent}
    ]
  },
  {
    path: 'user', component: UserComponent, children: [
      {path: 'usage-terms', component: UserUsageTermsComponent},
      {path: 'privacy-policy', component: UserPrivacyPolicyComponent},
      {path: 'imprint', component: UserImprintComponent}
    ]
  },
  {path: '**', component: CommonErrorComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    UserWelcomeComponent,
    UserExpositionComponent,
    UserExhibitComponent,
    AdminLoginComponent,
    AdminHomeComponent,
    AdminSidebarComponent,
    AdminExpositionComponent,
    AdminExhibitComponent,
    AdminInfoPagesComponent,
    AdminPersonalDataComponent,
    AdminHomeComponent,
    AdminMuseumStatsComponent,
    UserCommentComponent,
    UserInfoPageComponent,
    CommonErrorComponent,
    UserComponent,
    AdminNewExpositionComponent,
    AdminNewExhibitComponent,
    CommonExpositionCardComponent,
    CommonExhibitCardComponent,
    AdminBoxCardComponent,
    AdminNewInfoPageComponent,
    AdminInfoPageComponent,
    UserUsageTermsComponent,
    AdminExpositionStatsComponent,
    AdminStatsComponent,
    AdminCommentCardComponent,
    AdminImageDetailsComponent,
    AdminAlertComponent,
    AdminSpinnerComponent,
    AdminQrCodeComponent,
    UserMuseumComponent,
    CommonCookieBannerComponent,
    CommonAudioPlayerComponent,
    CommonVideoPlayerComponent,
    AdminSettingsComponent,
    UserAppBarComponent,
    UserPrivacyPolicyComponent,
    UserCarouselComponent,
    UserExhibitFullscreenComponent,
    UserExpositionFullscreenComponent,
    UserMuseumFullscreenComponent,
    UserSitePlanFullscreenComponent,
    UserImprintComponent,
    AdminMuseumComponent,
    AdminHeaderComponent,
    AdminComponent
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
    UserCommentComponent
  ],
  entryComponents: [
    UserCommentComponent,
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
