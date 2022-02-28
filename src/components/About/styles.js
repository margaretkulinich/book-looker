import styled from 'styled-components';
import { device } from '../../utils/constants';

export const classes = {
    contentSection: 'content-section',
    img: 'image-section',
}

export const StyledAbout = styled.div`
    padding: 30px 30px;
    color: #5C97D5;
    font-size: 18px;

    .${classes.contentSection} {
        max-width: 95%;
        max-height: 100%;
        display: flex;
        flex-direction: "row";
        justify-content: space-around;
        margin-bottom: 10px;
    }

    .${classes.img} {
        padding: 25px 50px;
        width: 50%;
        object-fit: contain;
    }

    @media ${device.mobileM}, ${device.mobileL} {
        .${classes.contentSection} {
            flex-wrap: wrap;
        }
    }

    @media ${device.tablet} {
        .${classes.img} {
            padding: 5px 10px;
        }
    }
`;