// Sidebar navigation functionality
document.addEventListener('DOMContentLoaded', function() {
  const sidebar = document.getElementById('sidebar');
  const mainContent = document.getElementById('main-content');
  const mobileOverlay = document.getElementById('mobile-overlay');
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const closeSidebarBtn = document.getElementById('close-sidebar');
  
  let isDesktop = window.innerWidth >= 768;
  let sidebarOpen = isDesktop;
  
  // Initialize sidebar state
  function initializeSidebar() {
    if (isDesktop) {
      showSidebar();
    } else {
      hideSidebar();
    }
  }
  
  function showSidebar() {
    if (sidebar) {
      sidebar.classList.remove('sidebar-closed');
      sidebar.classList.add('sidebar-open');
    }
    if (mainContent && isDesktop) {
      mainContent.classList.add('main-content-with-sidebar');
    }
    if (mobileOverlay && !isDesktop) {
      mobileOverlay.classList.add('active');
    }
    if (hamburgerBtn) {
      hamburgerBtn.classList.add('active');
    }
    sidebarOpen = true;
  }
  
  function hideSidebar() {
    if (sidebar) {
      sidebar.classList.remove('sidebar-open');
      sidebar.classList.add('sidebar-closed');
    }
    if (mainContent) {
      mainContent.classList.remove('main-content-with-sidebar');
    }
    if (mobileOverlay) {
      mobileOverlay.classList.remove('active');
    }
    if (hamburgerBtn) {
      hamburgerBtn.classList.remove('active');
    }
    sidebarOpen = false;
  }
  
  function toggleSidebar() {
    if (sidebarOpen) {
      hideSidebar();
    } else {
      showSidebar();
    }
  }
  
  // Event listeners
  if (hamburgerBtn) {
    hamburgerBtn.addEventListener('click', toggleSidebar);
  }
  
  if (closeSidebarBtn) {
    closeSidebarBtn.addEventListener('click', hideSidebar);
  }
  
  if (mobileOverlay) {
    mobileOverlay.addEventListener('click', hideSidebar);
  }
  
  // Handle window resize
  window.addEventListener('resize', function() {
    const newIsDesktop = window.innerWidth >= 768;
    
    if (newIsDesktop !== isDesktop) {
      isDesktop = newIsDesktop;
      initializeSidebar();
    }
  });
  
  // Initialize
  initializeSidebar();
  
  // Handle active nav item
  const navItems = document.querySelectorAll('.nav-item');
  const currentPath = window.location.pathname;
  
  navItems.forEach(item => {
    const link = item.querySelector('a');
    if (link) {
      const href = link.getAttribute('href');
      if (href === currentPath || (currentPath === '/' && href === '/')) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    }
  });
});