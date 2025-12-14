import { Routes } from '@angular/router';
import { HabitListComponent } from './components/habit-list/habit-list';
import { HabitFormComponent } from './components/habit-form/habit-form';

export const routes: Routes = [
  { path: '', component: HabitListComponent },
  { path: 'add', component: HabitFormComponent }
];
