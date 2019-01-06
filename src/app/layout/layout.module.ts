import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { SidebarComponent } from './shared-components/sidebar/sidebar.component';
import { HeaderComponent } from './shared-components/header/header.component';
import { FormsModule } from '@angular/forms';
import { CanDeactivateGuard } from './steps/guard/CanDeactivateGuard';
// import { TruncateModule } from 'ng2-truncate';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        LayoutRoutingModule,
        NgbDropdownModule.forRoot(),
        // TruncateModule
    ],
    declarations: [LayoutComponent, SidebarComponent, HeaderComponent],
    providers: [CanDeactivateGuard],
})
export class LayoutModule {}
