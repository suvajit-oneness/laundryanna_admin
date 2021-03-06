import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CommonModule } from "@angular/common";
import { FormsModule , ReactiveFormsModule, FormControl} from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalModule } from 'ngx-bootstrap/modal'; 
import {
  NgxUiLoaderModule,
  NgxUiLoaderConfig,
  SPINNER,
  POSITION,
  PB_DIRECTION,
} from "ngx-ui-loader";

const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  "bgsColor": "red",
  "bgsOpacity": 0.5,
  "bgsPosition": "bottom-right",
  "bgsSize": 70,
  "bgsType": "ball-spin-clockwise",
  "blur": 3,
  "delay": 0,
  "fastFadeOut": true,
  "fgsColor": "#1371bb",
  "fgsPosition": "center-center",
  "fgsSize": 80,
  "fgsType": "pulse",
  "gap": 24,
  "logoPosition": "center-center",
  "logoSize": 120,
  "logoUrl": "",
  "masterLoaderId": "master",
  "overlayBorderRadius": "0",
  "overlayColor": "rgba(40,40,40,0.42)",
  "pbColor": "#1371bb",
  "pbDirection": "ltr",
  "pbThickness": 3,
  "hasProgressBar": true,
  "text": "",
  "textColor": "#FFFFFF",
  "textPosition": "center-center",
  "maxTime": -1,
  "minTime": 300
};

import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import { AgmCoreModule } from "@agm/core";

import { AppComponent } from './app.component';
import { HeaderComponent } from './component/layouts/header/header.component';
import { SidebarComponent } from './component/layouts/sidebar/sidebar.component';
import { DashboardComponent } from './component/admin/dashboard/dashboard.component';

import { AppRoutingModule } from './app-routing.module';
import { CityListComponent } from './component/admin/city/city-list/city-list.component';
import { CityAddEditComponent } from './component/admin/city/city-add-edit/city-add-edit.component';
import { ItemListComponent } from './component/admin/item/item-list/item-list.component';
import { ItemAddEditComponent } from './component/admin/item/item-add-edit/item-add-edit.component';
import { CategoryListComponent } from './component/admin/category/category-list/category-list.component';
import { CategoryAddEditComponent } from './component/admin/category/category-add-edit/category-add-edit.component';
import { LoginComponent } from './component/admin/auth/login/login.component';
import { RegistrationComponent } from './component/admin/auth/registration/registration.component';
import { ConfirmationDialogComponent } from './component/confirmation-dialog/confirmation-dialog.component';
import { ConfirmationDialogService } from './service/confirmation-dialog.service';
import { CompanyListComponent } from './component/admin/company/company-list/company-list.component';
import { CompanyAddEditComponent } from './component/admin/company/company-add-edit/company-add-edit.component';
import { SubCategoryListComponent } from './component/admin/sub_category/sub-category-list/sub-category-list.component';
import { SubCategoryAddEditComponent } from './component/admin/sub_category/sub-category-add-edit/sub-category-add-edit.component';
import { CustomerListComponent } from './component/admin/customer/customer-list/customer-list.component';
import { CustomerAddEditComponent } from './component/admin/customer/customer-add-edit/customer-add-edit.component';
import { CustomerAddressComponent } from './component/admin/customer/customer-address/customer-address.component';
import { CompanySettingsComponent } from './component/admin/master/company-settings/company-settings.component';
import { SettingUpdateComponent } from './component/admin/master/setting-update/setting-update.component';
import { TimeSlotListComponent } from './component/admin/company/time-slot-list/time-slot-list.component';
import { TimeSlotAddEditComponent } from './component/admin/company/time-slot-add-edit/time-slot-add-edit.component';
import { CustomerAddressListComponent } from './component/admin/customer/customer-address-list/customer-address-list.component';
import { ServiceBoyListComponent } from './component/admin/service_boy/service-boy-list/service-boy-list.component';
import { ServiceBoyAddComponent } from './component/admin/service_boy/service-boy-add/service-boy-add.component';
import { PickUpListComponent } from './component/admin/pickUp/pick-up-list/pick-up-list.component';
import { PickUpAddEditComponent } from './component/admin/pickUp/pick-up-add-edit/pick-up-add-edit.component';
import { OfferListComponent } from './component/admin/offer/offer-list/offer-list.component';
import { OfferAddEditComponent } from './component/admin/offer/offer-add-edit/offer-add-edit.component';
import { CouponListComponent } from './component/admin/coupon/coupon-list/coupon-list.component';
import { CouponAddEditComponent } from './component/admin/coupon/coupon-add-edit/coupon-add-edit.component';
import { PlanListComponent } from './component/admin/plan/plan-list/plan-list.component';
import { PlanAddEditComponent } from './component/admin/plan/plan-add-edit/plan-add-edit.component';
import { MatTableModule } from '@angular/material/table';
import { DataTablesModule } from "angular-datatables";
import { PriceListComponent } from './component/admin/price/price-list/price-list.component';
import { PriceAddEditComponent } from './component/admin/price/price-add-edit/price-add-edit.component';
import { RateCardAddEditComponent } from './component/admin/rate_card/rate-card-add-edit/rate-card-add-edit.component';
import { RateCardListComponent } from './component/admin/rate_card/rate-card-list/rate-card-list.component';
import { OrderListComponent } from './component/admin/order/order-list/order-list.component';
import { OrderAddEditComponent } from './component/admin/order/order-add-edit/order-add-edit.component';
import { StoreListComponent } from './component/admin/store/store-list/store-list.component';
import { StoreDetailComponent } from './component/admin/store/store-detail/store-detail.component';
import { StoreAddEditComponent } from './component/admin/store/store-add-edit/store-add-edit.component';
import { StoreGeofencingComponent } from './component/admin/store/store-geofencing/store-geofencing.component';
import { ServiceBoyCalendarComponent } from './component/admin/service_boy/service-boy-calendar/service-boy-calendar.component';
import { StoreOwnerListComponent } from './component/admin/store-owner/store-owner-list/store-owner-list.component';
import { StoreOwnerDetailComponent } from './component/admin/store-owner/store-owner-detail/store-owner-detail.component';
import { StoreOwnerAddEditComponent } from './component/admin/store-owner/store-owner-add-edit/store-owner-add-edit.component';
import { MotherCategoryListComponent } from './component/admin/mother-category/mother-category-list/mother-category-list.component';
import { MotherCategoryAddEditComponent } from './component/admin/mother-category/mother-category-add-edit/mother-category-add-edit.component';
@NgModule({
  declarations: [
    AppComponent,HeaderComponent,SidebarComponent,DashboardComponent,CityListComponent,CityAddEditComponent,ItemListComponent,ItemAddEditComponent,CategoryListComponent,CategoryAddEditComponent,LoginComponent,RegistrationComponent,ConfirmationDialogComponent,CompanyListComponent,CompanyAddEditComponent,SubCategoryListComponent,SubCategoryAddEditComponent,CustomerListComponent,CustomerAddEditComponent,CustomerAddressComponent,CompanySettingsComponent,SettingUpdateComponent,TimeSlotListComponent,TimeSlotAddEditComponent,CustomerAddressListComponent,ServiceBoyListComponent,ServiceBoyAddComponent,PickUpListComponent,PickUpAddEditComponent,OfferListComponent,OfferAddEditComponent,CouponListComponent,CouponAddEditComponent,PlanListComponent,PlanAddEditComponent,PriceListComponent,PriceAddEditComponent,RateCardAddEditComponent,RateCardListComponent,OrderListComponent,OrderAddEditComponent,StoreListComponent,StoreDetailComponent,StoreAddEditComponent,StoreGeofencingComponent,ServiceBoyCalendarComponent,StoreOwnerListComponent,StoreOwnerDetailComponent,StoreOwnerAddEditComponent, MotherCategoryListComponent, MotherCategoryAddEditComponent
  ],
  imports: [
    BrowserModule,AppRoutingModule,CommonModule,FormsModule,ReactiveFormsModule,HttpClientModule,BrowserAnimationsModule,NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    NgbModule,
    ModalModule.forRoot(),MatTableModule,DataTablesModule,GooglePlaceModule,AgmCoreModule.forRoot({apiKey:'AIzaSyDPuZ9AcP4PHUBgbUsT6PdCRUUkyczJ66I',libraries: ['drawing']})
  ],
  providers: [ConfirmationDialogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
