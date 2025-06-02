document.addEventListener('DOMContentLoaded', () => {
    const sidebarToggle = document.querySelector('.sidebar-toggle');
    const sidebar = document.querySelector('.sidebar');
    const dashboardContainer = document.querySelector('.dashboard-container');

    console.log('sidebarToggle element:', sidebarToggle);
    console.log('sidebar element:', sidebar);
    console.log('dashboardContainer element:', dashboardContainer);
    

   sidebarToggle.addEventListener('click', () => {
    console.log('Toggle button clicked!');
    sidebar.classList.toggle('active');
    console.log('Sidebar active class:', sidebar.classList.contains('active'));
    dashboardContainer.classList.toggle('sidebar-open');
    console.log('Dashboard container sidebar-open class:', dashboardContainer.classList.contains('sidebar-open'));
});

    // Optional: Close sidebar when clicking on the overlay
    // If you implemented the overlay, you can add this:
    dashboardContainer.addEventListener('click', (event) => {
        // Check if the click occurred on the overlay itself, not on the sidebar
        if (dashboardContainer.classList.contains('sidebar-open') &&
            !sidebar.contains(event.target) &&
            !sidebarToggle.contains(event.target)) {
            sidebar.classList.remove('active');
            dashboardContainer.classList.remove('sidebar-open');
        }
    });
});

alert('Dome Loaded')