import { Routes } from '@angular/router';
import { Modulo1Component } from './modulo1/modulo1.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';

export const routes: Routes = [
    { path: 'modulo1', component: Modulo1Component, children: [
        { path: 'child1', component: Child1Component },
        { path: 'child2', component: Child2Component }
    ]
    }
];
