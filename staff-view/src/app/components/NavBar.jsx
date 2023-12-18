import { IconCategory2, IconTruckDelivery, IconSettings } from '@tabler/icons-react';
import NavItem from './NavItem';
import layoutStyles from './../layout.module.css';

export default function NavBar() {
    // const iconSize = window.innerWidth > 768 ? 28 : 24;
    return (
        <div  className={layoutStyles.navBar}>
            <NavItem icon={<IconCategory2 size={24} />} label={'Menu'} route={'/menu'}/>
            <NavItem icon={<IconTruckDelivery size={24} />} label={'Deliveries'} route={'/deliveries'}/>
            <NavItem icon={<IconSettings size={24} />} label={'Settings'} route={'/settings'}/>
        </div>
    )
}
