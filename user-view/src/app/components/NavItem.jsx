import Link from "next/link";
import layoutStyles from './../layout.module.css';

export default function NavItem( { label, icon, route } ) {
    return (
        <Link href={route} className={layoutStyles.navItem}>
            { icon }
            { label }
        </Link>
    )
}
