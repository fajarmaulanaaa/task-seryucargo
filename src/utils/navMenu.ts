
type NavLink = {
    title: string;
    path: string;
};

const MenuNavigationBar: NavLink[] = [
    {
        title: 'Home',
        path: '/'
    },
    {
        title: 'Favorite',
        path: '/favorite'
    },
    {
        title: 'Watchlist',
        path: '/watchlist'
    },
]

export default MenuNavigationBar