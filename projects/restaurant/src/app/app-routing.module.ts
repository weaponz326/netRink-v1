import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from 'projects/personal/src/app/guards/auth/auth.guard';
import { AccountGuard } from 'projects/restaurant/src/app/guards/account/account.guard';
import { AdminGuard } from 'projects/restaurant/src/app/guards/access/admin/admin.guard';
import { PortalGuard } from 'projects/restaurant/src/app/guards/access/portal/portal.guard';
import { SettingsGuard } from 'projects/restaurant/src/app/guards/access/settings/settings.guard';
import { MenuGuard } from 'projects/restaurant/src/app/guards/access/menu/menu.guard';
import { StaffGuard } from 'projects/restaurant/src/app/guards/access/staff/staff.guard';
import { TablesGuard } from 'projects/restaurant/src/app/guards/access/tables/tables.guard';
import { CustomersGuard } from 'projects/restaurant/src/app/guards/access/customers/customers.guard';
import { DeliveriesGuard } from 'projects/restaurant/src/app/guards/access/deliveries/deliveries.guard';
import { PaymentsGuard } from 'projects/restaurant/src/app/guards/access/payments/payments.guard';
import { RosterGuard } from 'projects/restaurant/src/app/guards/access/roster/roster.guard';
import { ReservationsGuard } from 'projects/restaurant/src/app/guards/access/reservations/reservations.guard';
import { OrdersGuard } from 'projects/restaurant/src/app/guards/access/orders/orders.guard';
import { KitchenStockGuard } from 'projects/restaurant/src/app/guards/access/kitchen-stock/kitchen-stock.guard';


const routes: Routes = [
  {
    path: "",
    loadChildren: () => import("./pages/guest-landing-page/guest-landing-page.module").then(m => m.GuestLandingPageModule)
  },
  {
    path: "guest",
    loadChildren: () => import("./pages/guest-landing-page/guest-landing-page.module").then(m => m.GuestLandingPageModule)
  },
  {
    path: "user",
    canActivate: [AuthGuard],
    loadChildren: () => import("./pages/user-landing-page/user-landing-page.module").then(m => m.UserLandingPageModule)
  },
  {
    path: "auth",
    loadChildren: () => import("projects/personal/src/app/pages/auth-page/auth-page.module").then(m => m.AuthPageModule)
  },
  {
    path: "register",
    loadChildren: () => import("./pages/register-page/register-page.module").then(m => m.RegisterPageModule)
  },
  {
    path: "home",
    canActivate: [AccountGuard],
    canActivateChild: [AccountGuard],
    children: [
      {
        path: "",
        loadChildren: () => import("./pages/home-page/home-page.module").then(m => m.HomePageModule)
      },
      {
        path: "admin",
        canActivate: [AdminGuard],
        canActivateChild: [AdminGuard],
        loadChildren: () => import("./pages/modules/admin-page/admin-page.module").then(m => m.AdminPageModule)
      },
      {
        path: "portal",
        canActivate: [PortalGuard],
        canActivateChild: [PortalGuard],
        loadChildren: () => import("./pages/modules/portal-page/portal-page.module").then(m => m.PortalPageModule)
      },
      {
        path: "settings",
        canActivate: [SettingsGuard],
        canActivateChild: [SettingsGuard],
        loadChildren: () => import("./pages/modules/settings-page/settings-page.module").then(m => m.SettingsPageModule)
      },
      {
        path: "menu",
        canActivate: [MenuGuard],
        canActivateChild: [MenuGuard],
        loadChildren: () => import("./pages/modules/menu-page/menu-page.module").then(m => m.MenuPageModule)
      },
      {
        path: "staff",
        canActivate: [StaffGuard],
        canActivateChild: [StaffGuard],
        loadChildren: () => import("./pages/modules/staff-page/staff-page.module").then(m => m.StaffPageModule)
      },
      {
        path: "tables",
        canActivate: [TablesGuard],
        canActivateChild: [TablesGuard],
        loadChildren: () => import("./pages/modules/tables-page/tables-page.module").then(m => m.TablesPageModule)
      },
      {
        path: "customers",
        canActivate: [CustomersGuard],
        canActivateChild: [CustomersGuard],
        loadChildren: () => import("./pages/modules/customers-page/customers-page.module").then(m => m.CustomersPageModule)
      },
      {
        path: "deliveries",
        canActivate: [DeliveriesGuard],
        canActivateChild: [DeliveriesGuard],
        loadChildren: () => import("./pages/modules/deliveries-page/deliveries-page.module").then(m => m.DeliveriesPageModule)
      },
      {
        path: "payments",
        canActivate: [PaymentsGuard],
        canActivateChild: [PaymentsGuard],
        loadChildren: () => import("./pages/modules/payments-page/payments-page.module").then(m => m.PaymentsPageModule)
      },
      {
        path: "roster",
        canActivate: [RosterGuard],
        canActivateChild: [RosterGuard],
        loadChildren: () => import("./pages/modules/roster-page/roster-page.module").then(m => m.RosterPageModule)
      },
      {
        path: "reservations",
        canActivate: [ReservationsGuard],
        canActivateChild: [ReservationsGuard],
        loadChildren: () => import("./pages/modules/reservations-page/reservations-page.module").then(m => m.ReservationsPageModule)
      },
      {
        path: "orders",
        canActivate: [OrdersGuard],
        canActivateChild: [OrdersGuard],
        loadChildren: () => import("./pages/modules/orders-page/orders-page.module").then(m => m.OrdersPageModule)
      },
      {
        path: "kitchen-stock",
        canActivate: [KitchenStockGuard],
        canActivateChild: [AccountGuard],
        loadChildren: () => import("./pages/modules/kitchen-stock-page/kitchen-stock-page.module").then(m => m.KitchenStockPageModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
