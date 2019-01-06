import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageHeaderModule } from './../../shared';
import {ClientsComponent} from './clients.component';
import {ClientsRoutingModule} from './clients-routing.module';
import {SharedPipesModule} from '../../shared/pipes/shared-pipes.module';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
    imports: [ClientsRoutingModule,
              CommonModule,
              NgxPaginationModule,
              PageHeaderModule,
              SharedPipesModule.forRoot()],
    declarations: [ClientsComponent]
})
export class ClientsModule {}
