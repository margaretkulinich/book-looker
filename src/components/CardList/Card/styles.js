import styled from 'styled-components';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import { CardActions } from '@mui/material';
import { styled as styledMui } from '@mui/material/styles';
import { MAIN_FONT_COLOR, device } from '../../../utils/constants';

export const classes = {
    linkRead: 'link-read',
    bookName: 'book-name',
    bookAuthors: 'book-authors',
    bookModalInfo: 'book-modal-info',
    bookModalInfoContainer: 'book-modal-info-container',
}

export const BookCard = styled(Card)`
    &.MuiPaper-root {
        width: 20%;
        max-height: 550px;
        padding: 10px 15px;
        margin-bottom: 20px;
        border-radius: 10px;
        box-shadow: 1px 1px 5px #5c8fc6;
        transition: all .2s ease-in-out;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    &.MuiPaper-root:hover{
        transform: scale(1.05);
    }

    .${classes.bookName} {
        color: ${MAIN_FONT_COLOR};
        margin-bottom: 5%;
    }

    .${classes.bookAuthors} {
        color: #999da3;
        margin-bottom: 5%;
    }

    @media ${device.mobileM} {
        &.MuiPaper-root {
            width: 85%;
        }
    }

    @media ${device.mobileL} {
        &.MuiPaper-root {
            width: 40%;
        }
    }

    @media ${device.tablet} {
        &.MuiPaper-root {
            width: 27%;
        }
    }
`;

export const BookImage = styled(CardMedia)`
    &.MuiCardMedia-root {
        width: 100%;
        height: 250px;
        margin-top: 5px;
        box-shadow: 1px 1px 5px #5c8fc6;
        object-fit: contain;
    }
`;

export const ActionLinks = styled(CardActions)`
    height: 8%;
`;

export const DecorationButton = styled(Button)`
    .${classes.linkRead} {
        text-decoration: none;
        color: #70b3fa;
        padding: 3px;
    }

    &.MuiButton-root {
        color: #70b3fa;
    }
`;

export const BootstrapDialog = styledMui(Dialog)(({ theme }) => ({
    '& .MuiPaper-root': {
        color: MAIN_FONT_COLOR,
    },

    '& .MuiButtonBase-root': {
        top: 0,
        right: 0,
    },

    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },

    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

export const StyledDialogContent = styled(DialogContent)`
    .${classes.bookModalInfoContainer} {
        display: flex;
    }

    .${classes.bookModalInfo} {
        color: grey;
        margin-left: 20px;
    }
`;