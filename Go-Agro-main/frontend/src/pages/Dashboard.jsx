
import classes from './dashboard.module.css';
import { Link } from 'react-router-dom';

function Dashboard() {
    return (
        <div className={classes.container}>
            <div className={classes.menu}>
                {allItems.map(item => (
                    <Link to={item.url} key={item.url}
                        style={{
                            backgroundColor: item.bgColor,
                            color: item.color,
                        }}
                    >
                        <img src={item.imageUrl} alt={item.title} />
                        <h2>{item.title}</h2>
                    </Link>
                ))}
            </div>
        </div>
    );
}

const allItems = [
    {
        title: 'Tracking',
        imageUrl: '/icons/tracking.svg',
        url: '/tracking',
        bgColor: '#008000',
        color: 'white',
    },
    {
        title: 'Manage Listings',
        imageUrl: '/icons/management.svg',
        url: '/lists/show',
        bgColor: '#008000',
        color: 'white',
    },
    {
        title: 'My Orders',
        imageUrl: '/icons/orders.svg',
        url: '/orders',
        bgColor: '#008000',
        color: 'white',
    },
    {
        title: 'My Complaints',
        imageUrl: '/icons/complaint.svg',
        url: '/complaint',
        bgColor: '#008000',
        color: 'white',
    },
];

export default Dashboard;
