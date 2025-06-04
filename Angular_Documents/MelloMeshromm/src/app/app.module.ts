import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BulkeditComponent } from './admin/bulkedit/bulkedit.component';
import { CreatestoresComponent } from './admin/createstores/createstores.component';
// import { ImageGalleryComponent } from './admin/image-gallery/image-gallery.component';
import { LoginComponent } from './admin/login/login.component';
// import { MarketingProgramComponent } from './admin/marketing-program/marketing-program.component';
import { PciComplianceComponent } from './admin/pci-compliance/pci-compliance.component';
import { UserpermissionComponent } from './admin/userpermission/userpermission.component';
import { FranchiseeBusinessEntityComponent } from './admin/franchisee-business-entity/franchisee-business-entity.component';
import { VisitCommunicationLogComponent } from './store-details/visit-communication-log/visit-communication-log.component';
import { BusinessCoachComponent } from './business-coach/business-coach/business-coach.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { StorelistComponent } from './dashboard/storelist/storelist.component';
import { ExportComponent } from './export/export/export.component';

import { FranchiseeComponent } from './franchisee/franchisee/franchisee.component';
// import { MarketingprogramComponent } from './marketingprogram/marketingprogram/marketingprogram.component';
import { MarketingprogramComponent } from './marketingprogram/marketingprogram/marketingprogram.component';
import { MenuComponent } from './menu/menu/menu.component';
import { SelectstoreComponent } from './menu/selectstore/selectstore.component';
import { GlobalSearchComponent } from './shared/components/global-search/global-search.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { SidenavbarComponent } from './shared/components/sidenavbar/sidenavbar.component';
import { BuildingDetailsComponent } from './store-details/building-details/building-details.component';
import { GuestFeedbackComponent } from './store-details/guest-feedback/guest-feedback.component';
import { RequestTicketComponent } from './store-details/request-ticket/request-ticket.component';
// import { SalesChaneelComponent } from './store-details/sales-chaneel/sales-chaneel.component';
import { SalesChaneelComponent } from './store-details/sales-chaneel/sales-chaneel.component';
import { StoreInfoComponent } from './store-details/store-info/store-info.component';
import { TechnologyComponent } from './store-details/technology/technology.component';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { MatSortModule } from '@angular/material/sort';
import { LayoutComponent } from './shared/components/layout/layout.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { MatTableModule } from '@angular/material/table';
// import {MatListModule} from '@angular/material/list';
// import {MatSidenavModule} from '@angular/material/sidenav';
// import { TreeTableModule } from "primeng/treetable";
// import { TableModule } from "primeng/table";
import { MatDatepickerModule } from '@angular/material/datepicker';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { MatSelectModule } from '@angular/material/select';
// import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from '@angular/material/input';
// import { MatPaginatorModule} from '@angular/material';
// import { MatPaginator } from '@angular/material/paginator';
// import { MatTableDataSource } from "@angular/material";

import { MatPaginatorModule } from '@angular/material/paginator';
import { ImageGalleriesComponent } from './admin/image-galleries/image-galleries.component';
import { ImageGalleryComponent } from './store-details/image-gallery/image-gallery.component';
import { MarketingprogramsComponent } from './admin/marketingprograms/marketingprograms.component';
import { MarketprogramsComponent } from './store-details/marketprograms/marketprograms.component';
import { VisitCommunicationComponent } from './admin/visit-communication/visit-communication.component';
import { SalesComponent } from './admin/sales/sales.component';




// import { TableModule } from 'primeng/table';
// import { CalendarModule } from 'primeng/calendar';
// import { SliderModule } from 'primeng/slider';
// import { DialogModule } from 'primeng/dialog';
// import { MultiSelectModule } from 'primeng/multiselect';
// import { ContextMenuModule } from 'primeng/contextmenu';
// import { ButtonModule } from 'primeng/button';
// import { ToastModule } from 'primeng/toast';
// import { InputTextModule } from 'primeng/inputtext';
// import { ProgressBarModule } from 'primeng/progressbar';
// import { DropdownModule } from 'primeng/dropdown';



@NgModule({
  declarations: [
    AppComponent,
    BulkeditComponent,
    CreatestoresComponent,
  ImageGalleryComponent,
    ImageGalleriesComponent,
    LoginComponent,
    // MarketingProgramComponent,
    PciComplianceComponent,
    UserpermissionComponent,
    FranchiseeBusinessEntityComponent,
    VisitCommunicationLogComponent,
    BusinessCoachComponent,
    DashboardComponent,
    StorelistComponent,
    ExportComponent,
    MarketingprogramComponent,
    MenuComponent,
    SelectstoreComponent,
    GlobalSearchComponent,
    HeaderComponent,
    SidenavbarComponent,
    BuildingDetailsComponent,
    GuestFeedbackComponent,
    RequestTicketComponent,
    SalesChaneelComponent,
    StoreInfoComponent,
    TechnologyComponent,
    LayoutComponent,
    FooterComponent,
    FranchiseeComponent,
    ImageGalleriesComponent,
    MarketingprogramsComponent,
    MarketprogramsComponent,
    VisitCommunicationComponent,
    SalesComponent

  ],
  imports: [
    BrowserModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatListModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    MatDividerModule,
    MatSortModule,
    MatTableModule,
    MatDatepickerModule,
    MatSelectModule,
    // MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    


    // TreeTableModule,TableModule

    // TableModule, CalendarModule, SliderModule, DialogModule,
    // MultiSelectModule, ContextMenuModule, ButtonModule, ToastModule, InputTextModule,
    // ProgressBarModule, DropdownModule



  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class AppModule { }
