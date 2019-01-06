import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageHeaderModule } from '../../shared/index';
import { StepsComponent } from './steps.component';
import { FormsModule } from '@angular/forms';
import { StepsRoutingModule } from './steps-routing.module';
import { ArchwizardModule } from 'angular-archwizard';

@NgModule({
    imports: [CommonModule, StepsRoutingModule, ArchwizardModule, PageHeaderModule, FormsModule],
    declarations: [StepsComponent]
})
export class StepsModule {}
