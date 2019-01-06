import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SearchPipe} from './SearchPipe';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [SearchPipe],
    exports: [SearchPipe]
})
export class SharedPipesModule {
    static forRoot() {
        return {
            ngModule: SharedPipesModule,
            providers: [],
        };
    }
}
