import { Component, computed, signal, effect } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-hello',
  styleUrl: './hello.css',
  templateUrl: './hello.html',
})
export class Hello {
  protected title = 'Welcome to modern Angular!';

  protected isDisabled = false;

  protected onClick() {
    console.log('Button clicked!');
    this.isDisabled = !this.isDisabled;
  }

  protected count = signal(0);

  protected doubleCount = computed(() => this.count() * 2);

  private readonly countLog = effect(() => {
    console.log('Counter changed:', this.count());
  });

  protected increaseCounter() {
    this.count.update((currentCount) => currentCount + 1);
  }

  protected decreaseCounter() {
    this.count.update((currentCount) => currentCount - 1);
  }

  protected resetCounter() {
    this.count.set(0);
  }
}
