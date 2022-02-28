import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

export const classes = {
    listItem: 'list-item'
};

export const StyledContact = styled.ul`
    .${classes.listItem} {
        list-style: none;
        font-size: 18px;
        margin-top: 5px;
    }
`;

export const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
    color: #70B3FA;
    padding-right: 15px;
`;