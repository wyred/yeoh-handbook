// shadcn/ui Button component for Jekyll
class Button {
  constructor(element) {
    this.element = element;
    this.init();
  }
  
  init() {
    // Add button base classes
    this.element.classList.add('btn');
    
    // Handle variants
    if (this.element.dataset.variant === 'ghost') {
      this.element.classList.add('btn-ghost');
    }
    
    // Handle sizes
    if (this.element.dataset.size === 'sm') {
      this.element.classList.add('btn-sm');
    }
  }
}

// Initialize buttons
document.addEventListener('DOMContentLoaded', function() {
  const buttons = document.querySelectorAll('[data-shadcn="button"]');
  buttons.forEach(button => new Button(button));
});