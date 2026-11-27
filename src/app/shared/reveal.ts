import { DestroyRef, Directive, ElementRef, afterNextRender, inject, input } from '@angular/core';

@Directive({
  selector: '[appReveal]',
  host: { class: 'reveal-pre' },
})
export class Reveal {
  atraso = input(0, { alias: 'revealDelay' });

  constructor() {
    const el = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
    const destroyRef = inject(DestroyRef);

    afterNextRender(() => {
      if (!('IntersectionObserver' in window)) {
        el.classList.add('reveal-in');
        return;
      }
      el.style.setProperty('--reveal-delay', `${this.atraso()}ms`);
      const observer = new IntersectionObserver(
        ([entrada]) => {
          if (entrada.isIntersecting) {
            el.classList.add('reveal-in');
            observer.disconnect();
          }
        },
        { threshold: 0.15, rootMargin: '0px 0px -6% 0px' },
      );
      observer.observe(el);
      destroyRef.onDestroy(() => observer.disconnect());
    });
  }
}