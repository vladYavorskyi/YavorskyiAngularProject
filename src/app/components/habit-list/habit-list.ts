import { Component, inject } from '@angular/core';
import { HabitService } from '../../services/habit';
import { formatDate } from '../../utils/date.util';


@Component({
  selector: 'app-habit-list',
  standalone: true,
  templateUrl: './habit-list.html',
   styleUrls: ['./habit-list.css']
})
export class HabitListComponent {
  private habitService = inject(HabitService);

  habits = this.habitService.habits;

  formatDate = formatDate;

  remove(id: number) {
    this.habitService.remove(id);
  }

  toggle(id: number) {
  this.habitService.toggle(id);
  }

}
