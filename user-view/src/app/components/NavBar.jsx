import { IconPackage } from '@tabler/icons-react';
import NavItem from './NavItem';
import layoutStyles from './../layout.module.css';

export default function NavBar() {
    return (
        <div  className={layoutStyles.navBar}>
            <NavItem icon={<IconPackage size={32} />} label={'Packages'} route={'/packages'}/>
            <NavItem icon={<IconPackage size={32} />} label={'Packages'} route={'/packages'}/>
            <NavItem icon={<IconPackage size={32} />} label={'Packages'} route={'/packages'}/>
        </div>
    )
}
