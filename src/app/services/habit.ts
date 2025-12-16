import { Injectable, signal } from '@angular/core';
import { Habit } from '../models/habit.model';

@Injectable({
  providedIn: 'root'
})
export class HabitService {
  private storageKey = 'habits';

  habits = signal<Habit[]>(this.load());

  private load(): Habit[] {
    return JSON.parse(localStorage.getItem(this.storageKey) || '[]');
  }

  private save(habits: Habit[]) {
    localStorage.setItem(this.storageKey, JSON.stringify(habits));
    this.habits.set(habits);
  }

  add(habit: Habit) {
    this.save([...this.habits(), habit]);
  }

  remove(id: number) {
  this.save(this.habits().filter(h => h.id !== id));
  }


}
