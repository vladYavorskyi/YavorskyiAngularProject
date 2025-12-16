import { Component, inject, computed } from '@angular/core';
import { HabitService } from '../../services/habit';
import { formatDate } from '../../utils/date.util';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css']
})
export class DashboardComponent {
  private habitService = inject(HabitService);

  habits = this.habitService.habits;

  total = computed(() => this.habits().length);

  firstDate = computed(() => {
    const habits = this.habits();
    return habits.length ? formatDate(habits[0].createdAt) : '—';
  });

  lastDate = computed(() => {
    const habits = this.habits();
    return habits.length
      ? formatDate(habits[habits.length - 1].createdAt)
      : '—';
  });

  completedCount = computed(() =>
    this.habits().filter(h => h.completed).length
  );

  progressPercent = computed(() => {
    const total = this.habits().length;
    return total === 0
      ? 0
      : Math.round((this.completedCount() / total) * 100);
  });
}
