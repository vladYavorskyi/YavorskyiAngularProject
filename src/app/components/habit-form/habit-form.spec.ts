import { Component, signal, inject } from '@angular/core';
import { HabitService } from '../../services/habit';
import { Router } from '@angular/router';

@Component({
  selector: 'app-habit-form',
  standalone: true,
  templateUrl: './habit-form.html'
})
export class HabitFormComponent {
  private habitService = inject(HabitService);
  private router = inject(Router);

  title = signal('');
  description = signal('');

  save() {
    if (!this.title()) {
      return;
    }

    this.habitService.add({
      id: Date.now(),
      title: this.title(),
      description: this.description(),
      createdAt: new Date().toISOString()
    });

    this.router.navigateByUrl('/');
  }
}
