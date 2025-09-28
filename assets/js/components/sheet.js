// shadcn/ui Sheet component for mobile sidebar
class Sheet {
  constructor(trigger, content) {
    this.trigger = trigger;
    this.content = content;
    this.overlay = null;
    this.isOpen = false;
    this.init();
  }
  
  init() {
    this.createOverlay();
    this.bindEvents();
  }
  
  createOverlay() {
    this.overlay = document.createElement('div');
    this.overlay.className = 'sheet-overlay';
    this.overlay.style.display = 'none';
    document.body.appendChild(this.overlay);
  }
  
  open() {
    this.isOpen = true;
    this.overlay.style.display = 'block';
    this.content.style.display = 'block';
    
    // Animate in
    requestAnimationFrame(() => {
      this.overlay.setAttribute('data-state', 'open');
      this.content.setAttribute('data-state', 'open');
    });
    
    document.body.style.overflow = 'hidden';
  }
  
  close() {
    this.isOpen = false;
    this.overlay.setAttribute('data-state', 'closed');
    this.content.setAttribute('data-state', 'closed');
    
    setTimeout(() => {
      this.overlay.style.display = 'none';
      this.content.style.display = 'none';
    }, 300);
    
    document.body.style.overflow = '';
  }
  
  toggle() {
    if (this.isOpen) {
      this.close();
    } else {
      this.open();
    }
  }
  
  bindEvents() {
    this.trigger.addEventListener('click', () => this.toggle());
    this.overlay.addEventListener('click', () => this.close());
    
    // Close on escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.isOpen) {
        this.close();
      }
    });
  }
}

// Initialize sheets
document.addEventListener('DOMContentLoaded', function() {
  const sheetTriggers = document.querySelectorAll('[data-shadcn="sheet-trigger"]');
  sheetTriggers.forEach(trigger => {
    const targetId = trigger.getAttribute('data-target');
    const content = document.getElementById(targetId);
    if (content) {
      new Sheet(trigger, content);
    }
  });
});