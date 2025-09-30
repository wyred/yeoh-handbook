// Navigation Toggle Component for collapsible submenus
class NavigationToggle {
  constructor() {
    this.init();
  }
  
  init() {
    this.bindToggleEvents();
    this.setInitialStates();
  }
  
  bindToggleEvents() {
    const toggleButtons = document.querySelectorAll('.nav-toggle');
    toggleButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        e.preventDefault();
        this.toggleSubmenu(button);
      });
    });
  }
  
  setInitialStates() {
    // Set initial chevron rotation based on aria-expanded state
    const toggleButtons = document.querySelectorAll('.nav-toggle');
    toggleButtons.forEach(button => {
      const isExpanded = button.getAttribute('aria-expanded') === 'true';
      const chevron = button.querySelector('.nav-toggle-icon');
      if (chevron) {
        chevron.style.transform = isExpanded ? 'rotate(90deg)' : 'rotate(0deg)';
      }
    });
  }
  
  toggleSubmenu(button) {
    const targetId = button.getAttribute('data-target');
    const submenu = document.getElementById(targetId);
    const chevron = button.querySelector('.nav-toggle-icon');
    
    if (!submenu || !chevron) return;
    
    const isExpanded = button.getAttribute('aria-expanded') === 'true';
    const newState = !isExpanded;
    
    // Update button state
    button.setAttribute('aria-expanded', newState.toString());
    
    // Animate chevron
    chevron.style.transform = newState ? 'rotate(90deg)' : 'rotate(0deg)';
    
    // Toggle submenu visibility with smooth animation
    if (newState) {
      // Show submenu
      submenu.style.display = 'block';
      // Force reflow for smooth animation
      submenu.offsetHeight;
      submenu.style.maxHeight = submenu.scrollHeight + 'px';
      submenu.style.opacity = '1';
    } else {
      // Hide submenu
      submenu.style.maxHeight = '0';
      submenu.style.opacity = '0';
      
      // Hide completely after animation
      setTimeout(() => {
        if (button.getAttribute('aria-expanded') === 'false') {
          submenu.style.display = 'none';
        }
      }, 300);
    }
  }
  
  // Public method to expand a specific submenu (useful for deep linking)
  expandSubmenu(targetId) {
    const button = document.querySelector(`[data-target="${targetId}"]`);
    if (button && button.getAttribute('aria-expanded') === 'false') {
      this.toggleSubmenu(button);
    }
  }
  
  // Public method to collapse all submenus
  collapseAll() {
    const toggleButtons = document.querySelectorAll('.nav-toggle[aria-expanded="true"]');
    toggleButtons.forEach(button => {
      this.toggleSubmenu(button);
    });
  }
}

// Initialize navigation toggle when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  new NavigationToggle();
});