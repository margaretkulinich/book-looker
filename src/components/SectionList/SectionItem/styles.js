import styled from 'styled-components';
import { MAIN_FONT_COLOR, device } from '../../../utils/constants';

export const classes = {
    img: 'section-image',
    info: 'section-info',
    text: 'section-text'
}

export const Section = styled.section`
    width: 90%;
    display: flex;
    flex-direction: ${props => (props.index % 2) ? "row" : "row-reverse"};
    align-items: center;
    justify-content: center;
    height: 380px;

    .${classes.img} {
        padding: 15px 30px;
        width: 35%;
    }

    .${classes.info} {
        width: 50%;
        padding: 0 40px;
        color: ${MAIN_FONT_COLOR};
        display: flex;
        flex-direction: column;
    }

    .${classes.text} {
        font-size: 0.9em;
        padding-top: 10px;
    }

    @media ${device.mobileM}, ${device.mobileL}, ${device.tablet} {
        height: 280px;
        width: 100%;

        .${classes.img} {
            padding: 2px 10px;
        }

        .${classes.info} {
            padding: 0 10px;
        }
    }

    @media ${device.laptop} {
        .${classes.text} {
            font-size: 1.1em;
        }
    }
`;