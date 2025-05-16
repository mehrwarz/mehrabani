const items = [
        {
            label: "User name",
            link: '#',
            icon: 'fas fa-user-circle',
            children: [
                {
                    label: 'Profile',
                    icon: 'fas fa-user',
                    link: '/dashboard/profile/wertyui3gehwe8jhb9',
                },
                {
                    label: 'Logout',
                    icon: 'fas fa-sign-out-alt',
                    link: '/api/auth/signout',
                },
            ]
        },
        {
            label: 'Users',
            icon: 'fas fa-users',
            link: '#',
            children: [
                {
                    label: 'Modify Users',
                    icon: 'fas fa-user-edit',
                    link: '/dashboard/user',
                },
                {
                    icon: 'fas fa-user-plus',
                    label: 'Add New User',
                    link: '/dashboard/user/add',
                },
            ]
        },
        {
            label: 'Manage Stock',
            icon: 'fas fa-archive',
            link: '#',
            children: [
                {
                    label: 'View Stock',
                    icon: 'fas fa-pie-chart',
                    link: '/dashboard/stock',
                },
                {
                    label: 'Stock Items',
                    icon: 'fas fa-cubes',
                    link: '/dashboard/stock/items',
                },
                {
                    label: 'Add Stock Location',
                    icon: 'fas fa-plus',
                    link: '/dashboard/stock/location',
                }
            ]
        },
        {
            label: 'Manage Application',
            icon: 'fas fa-users',
            link: '/dashboard/settings',
            children: null
        },
        {
            label: 'Reports',
            icon: 'fas fa-file-alt',
            link: '/report',
            children: null
        },
    ];

    export default items