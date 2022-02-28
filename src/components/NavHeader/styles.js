import styled from 'styled-components';
import { MAIN_FONT_COLOR } from '../../utils/constants';
import { device } from '../../utils/constants';

export const classes = {
    navItem: 'navigation-item',
    navLink: 'nav-link',
    iconLooker: 'fa-glasses'
};

export const Navigation = styled.nav`
    height: 70px;
    background-color: #E9F2FF;
    width: 100%;
    padding: 5px 0px;
    box-shadow: 0px 2px 0px #dfdfdd;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;

    .${classes.navItem} {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0 15px;
    }

    .${classes.navLink} {
        padding-left: 25px;
        padding-right: 5px;
        text-decoration: none;
        font-size: larger;
        font-weight: 600;
        color: ${MAIN_FONT_COLOR};
    }
    
    .${classes.iconLooker} {
        height: 40px;
        width: 40px;
        color: ${MAIN_FONT_COLOR};
        border: 1px solid #3d8f7d;
        border-radius: 100% ;
        padding: 10px;
        box-shadow: 1px 1px 5px ${MAIN_FONT_COLOR};
    }

    @media ${device.mobileM} {
        .${classes.navItem} {
            padding: 0;
        }

        .${classes.navLink} {
            padding-left: 15px;
            font-size: small;
        }
    }

    @media ${device.mobileL}, ${device.tablet} {
        .${classes.navLink} {
            padding-left: 15px;
            font-size: normal;
        }
    }
`;
