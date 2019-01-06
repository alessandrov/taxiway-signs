import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StepsComponent } from './steps.component';
import { CanDeactivateGuard } from './guard/CanDeactivateGuard';

const routes: Routes = [
    {
        path: '',
        component: StepsComponent,
        canDeactivate: [ CanDeactivateGuard ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class StepsRoutingModule {}
