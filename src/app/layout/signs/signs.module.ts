import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PageHeaderModule} from './../../shared';
import {SignsComponent} from './signs.component';
import {SignsRoutingModule} from './signs-routing.module';
import {NgxPaginationModule} from 'ngx-pagination';
import {FormsModule} from '@angular/forms';
import {SharedPipesModule} from '../../shared/pipes/shared-pipes.module';
import {TruncateModule} from 'ng2-truncate';

@NgModule({
    imports: [CommonModule,
        FormsModule,
        SignsRoutingModule,
        PageHeaderModule,
        NgxPaginationModule,
        TruncateModule,
        SharedPipesModule.forRoot()
    ],
    declarations: [SignsComponent]
})
export class SignsModule {
}
