import styled from 'styled-components';
import { device } from '../../utils/constants';

export const classes = {
    searchValueInfo: 'search-value-info',
    cardList: 'card-list-container'
}

export const CardContainer = styled.div`
    .${classes.searchValueInfo} {
        color: grey;
        padding-top: 50px;
        padding-left: 50px;
        width: 85%;
        margin: auto;
    }

    .${classes.cardList} {
        padding-top: 2%;
        display: flex;
        width: 85%;
        flex-direction: row;
        justify-content: space-around;
        flex-wrap: wrap;
        margin: auto;
    }

    @media ${device.mobileL},${device.tablet} {
        .${classes.cardList} {
            width: 95%;
        }
    }
`;
