import { Component, inject } from '@angular/core';
import { HabitService } from '../../services/habit';

@Component({
  selector: 'app-habit-list',
  standalone: true,
  templateUrl: './habit-list.html'
})
export class HabitListComponent {
  private habitService = inject(HabitService);

  habits = this.habitService.habits;
}
