import { Button } from '@mui/material';
import styled from 'styled-components';
import { MAIN_FONT_COLOR, device } from '../../utils/constants';

export const classes = {
    banner: 'homepage-banner',
    bannerText: 'banner-text',
    bannerHeadline: 'banner-headline',
    textDescription: 'banner-text-description',
    title: 'homepage-title',
    descriptionBanner: 'homepage-description-banner',
    navLink: 'nav-link',
}

export const HomepageContainer = styled.section`
    .${classes.banner} {
        position: relative;
        height: 410px;
        width: 100%;
        background: no-repeat right url(https://www.arkasoftwares.com/blog/wp-content/uploads/2020/12/online-Book-store-mobile-app-1.jpg);
        background-size: cover;
    }

    .${classes.bannerText} {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 70%;
        color: #E3F1FE;
        position: absolute;
        top: 8%;
        left: 5%;
    }

    .${classes.bannerHeadline} {
        font-size: 3em;
        margin: 2% 0;
        text-shadow: black 1px 5px 20px;
    }

    .${classes.textDescription} {
        font-size: 1.2em;
        width: 70%
    }

    .${classes.navLink} {
        padding-left: 25px;
        text-decoration: none;
        font-size: larger;
        font-weight: 600;
        color: ${MAIN_FONT_COLOR};
        max-width: 135px;
    }

    .${classes.title} {
        width: 100%;
        text-align: center;
        font-size: 2.8em;
        color: ${MAIN_FONT_COLOR};
        padding-top: 40px;
        margin: 0;
        text-shadow: grey 1px 1px 2px;
    }

    .${classes.descriptionBanner} {
        height: 450px;
        width: 100%;
        background: no-repeat center url(https://www.allianceindependentauthors.org/wp-content/uploads/2019/11/3-home-page.png);
    }

    @media ${device.mobileM} {
        .${classes.banner} {
            background-position: center;
            font-size: 12px;
        }

        .${classes.title} {
            font-size: 1.8em;
        }
    }

    @media ${device.mobileL}, ${device.tablet} {
        .${classes.banner} {
            background-position: center;
            font-size: 14px;
        }

        .${classes.title} {
            font-size: 1.8em;
        }
    }
`;

export const SearchButton = styled(Button)`
    &.MuiButton-root {
        background-color: ${MAIN_FONT_COLOR};
        color: #E3F1FE;
        margin: 30px 0;
        font-weight: 400;
        box-shadow: black 1px 5px 10px;
    }

    &.MuiButton-root:hover {
        background-color: #81b1e3;
        box-shadow: black 1px 5px 10px;
    }
`;
