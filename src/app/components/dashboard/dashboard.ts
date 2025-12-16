import { Component, inject, computed } from '@angular/core';
import { HabitService } from '../../services/habit';

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

  firstDate = computed(() =>
    this.habits().length ? this.habits()[0].createdAt : '—'
  );

  lastDate = computed(() =>
    this.habits().length
      ? this.habits()[this.habits().length - 1].createdAt
      : '—'
  );
}
