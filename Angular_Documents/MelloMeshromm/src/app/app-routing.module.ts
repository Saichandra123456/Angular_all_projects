import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BulkeditComponent } from './admin/bulkedit/bulkedit.component';
import { CreatestoresComponent } from './admin/createstores/createstores.component';
import { FranchiseeBusinessEntityComponent } from './admin/franchisee-business-entity/franchisee-business-entity.component';
import { ImageGalleriesComponent } from './admin/image-galleries/image-galleries.component';
import { LoginComponent } from './admin/login/login.component';
import { MarketingprogramsComponent } from './admin/marketingprograms/marketingprograms.component';
import { PciComplianceComponent } from './admin/pci-compliance/pci-compliance.component';
import { SalesComponent } from './admin/sales/sales.component';
import { UserpermissionComponent } from './admin/userpermission/userpermission.component';
import { VisitCommunicationComponent } from './admin/visit-communication/visit-communication.component';
import { BusinessCoachComponent } from './business-coach/business-coach/business-coach.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { StorelistComponent } from './dashboard/storelist/storelist.component';
import { ExportComponent } from './export/export/export.component';
import { FranchiseeComponent } from './franchisee/franchisee/franchisee.component';
import { MarketingprogramComponent } from './marketingprogram/marketingprogram/marketingprogram.component';
import { MenuComponent } from './menu/menu/menu.component';
import { BuildingDetailsComponent } from './store-details/building-details/building-details.component';
import { GuestFeedbackComponent } from './store-details/guest-feedback/guest-feedback.component';
import { ImageGalleryComponent } from './store-details/image-gallery/image-gallery.component';
import { MarketprogramsComponent } from './store-details/marketprograms/marketprograms.component';
import { RequestTicketComponent } from './store-details/request-ticket/request-ticket.component';
import { SalesChaneelComponent } from './store-details/sales-chaneel/sales-chaneel.component';
import { StoreInfoComponent } from './store-details/store-info/store-info.component';
import { TechnologyComponent } from './store-details/technology/technology.component';
import { VisitCommunicationLogComponent } from './store-details/visit-communication-log/visit-communication-log.component';

const routes: Routes = [
  // { path: " ", component: DashboardComponent },
  { path: "dashboard", component: DashboardComponent },
  { path: "storelist", component: StorelistComponent },
  { path: "export", component: ExportComponent },
  { path: "menu", component: MenuComponent },
  { path: "franchisee", component: FranchiseeComponent },
  { path: "marketingprogram", component: MarketingprogramComponent },
  { path: "business-coach", component: BusinessCoachComponent },

  // { path: "storelist/", component: BusinessCoachComponent },

  // { path: "storedetails/building-detalis", component: BuildingDetailsComponent },


  { path: "storeinfo", component: StoreInfoComponent },
  { path: "building-details", component: BuildingDetailsComponent },
  { path: "guest-feedback", component: GuestFeedbackComponent },
  { path: "image-gallery", component: ImageGalleryComponent },
  { path: "marketprograms", component: MarketprogramsComponent },
  { path: "request-ticket", component: RequestTicketComponent },
  { path: "sales-chaneel", component: SalesChaneelComponent },
  { path: "technology", component: TechnologyComponent },
  { path: "visit-communication", component: VisitCommunicationComponent },



  { path: "bulkedit", component: BulkeditComponent },
  { path: "createstores", component: CreatestoresComponent },
  { path: "franchisee-business-entity", component: FranchiseeBusinessEntityComponent },
  { path: "login", component: LoginComponent },
  { path: "marketingprograms", component: MarketingprogramsComponent },
  { path: "pci-compliance", component: PciComplianceComponent },
  { path: "userpermission", component: UserpermissionComponent },
  { path: "visit-communication-log", component: VisitCommunicationLogComponent },
  { path: "image-galleries", component: ImageGalleriesComponent },
  { path: "Sales", component: SalesComponent }





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
