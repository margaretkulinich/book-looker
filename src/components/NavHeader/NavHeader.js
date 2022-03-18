import React from 'react';
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlasses } from '@fortawesome/free-solid-svg-icons';
import { classes, Navigation } from './styles';

export function NavHeader() {
    return (
        <Navigation>
            <div className={classes.navItem}>
                <NavLink to='/book-looker' className={classes.navLink}>
                    <FontAwesomeIcon
                        icon={faGlasses}
                        className={classes.iconLooker}
                    />
                </NavLink>
                <NavLink to='/book-looker' className={classes.navLink}>BookLooker</NavLink>
            </div>
            <div className={classes.navItem}>
                <NavLink to='/about' className={classes.navLink}>About</NavLink>
                <NavLink to='/contact' className={classes.navLink}>Contact</NavLink>
            </div>
        </Navigation>
    )
}