 const body = document.body;
        const sidebar = document.querySelector('.sidebar');
        const toggleSidebar = document.querySelector('.toggle-sidebar');
        const sidebarLinks = document.querySelectorAll('.sidebar li');
        const hasSubmenuLinks = document.querySelectorAll('.has-submenu > a');

        toggleSidebar.addEventListener('click', () => {
            sidebar.classList.toggle('active');
            body.classList.toggle('sidebar-open'); // For potential content adjustments
            toggleSidebar.textContent = sidebar.classList.contains('active') ? '✖' : '☰'; // Update icon
        });

        hasSubmenuLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault(); // Prevent default link behavior
                const parentLi = link.parentNode;
                const submenu = parentLi.querySelector('.submenu');
                if (submenu) {
                    submenu.classList.toggle('active');
                    parentLi.classList.toggle('open'); // Optional: Add a class to style open submenu items
                }
            });
        });

        // Optional: Close sidebar on outside click (for mobile)
        document.addEventListener('click', (event) => {
            if (window.innerWidth <= 768 && sidebar.classList.contains('active') && !sidebar.contains(event.target) && event.target !== toggleSidebar) {
                sidebar.classList.remove('active');
                body.classList.remove('sidebar-open');
                toggleSidebar.textContent = '☰';
            }
        });