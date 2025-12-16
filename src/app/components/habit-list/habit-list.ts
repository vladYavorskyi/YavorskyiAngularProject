import { Component, inject, signal, computed } from '@angular/core';
import { HabitService } from '../../services/habit';
import { formatDate } from '../../utils/date.util';

type FilterType = 'all' | 'completed' | 'active';
type SortType = 'newest' | 'oldest' | 'title';

@Component({
  selector: 'app-habit-list',
  standalone: true,
  templateUrl: './habit-list.html',
  styleUrls: ['./habit-list.css']
})
export class HabitListComponent {
  private habitService = inject(HabitService);

  habits = this.habitService.habits;

  filter = signal<FilterType>('all');
  sort = signal<SortType>('newest');

  formatDate = formatDate;

  filteredHabits = computed(() => {
    let list = [...this.habits()];

    if (this.filter() === 'completed') {
      list = list.filter(h => h.completed);
    }

    if (this.filter() === 'active') {
      list = list.filter(h => !h.completed);
    }

    if (this.sort() === 'newest') {
      list.sort((a, b) => b.createdAt.localeCompare(a.createdAt));
    }

    if (this.sort() === 'oldest') {
      list.sort((a, b) => a.createdAt.localeCompare(b.createdAt));
    }

    if (this.sort() === 'title') {
      list.sort((a, b) => a.title.localeCompare(b.title));
    }

    return list;
  });

  remove(id: number) {
    this.habitService.remove(id);
  }

  toggle(id: number) {
    this.habitService.toggle(id);
  }
}
