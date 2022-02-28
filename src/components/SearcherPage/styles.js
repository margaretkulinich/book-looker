import { alpha, styled as styledMui } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import styled from 'styled-components';
import { MAIN_FONT_COLOR } from '../../utils/constants';

export const classes = {
    titleContainer: 'title-container',
    title: 'title',
};

export const Search = styledMui('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginTop: 40,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        width: 'auto',
    },
}));

export const StyledInputBase = styledMui(InputBase)(({ theme }) => ({
    color: 'white',
    borderRadius: '5px',
    backgroundColor: '#70b3fa',
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(2)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '25ch',
            '&:focus': {
                width: '40ch',
            },
        },
    },
}));

export const StyledSearchIcon = styled(SearchIcon)`
    color: white;
`;

export const StyledSearchPage = styled.div`
    height: 100%;
    .${classes.title} {
        color: ${MAIN_FONT_COLOR};
        font-size: 25px;
        margin: 0;
        padding-top: 10%;
        padding-left: 5%;
        display: ${props => props.focused ? 'none' : 'inline-block'};
    }

    .${classes.titleContainer} {
        background: url(https://epd.eu/wp-content/uploads/2020/07/AdobeStock_277269416-1024x607.jpeg) no-repeat center 100% fixed;
        background-size: cover;
        height: ${props => props.focused ? '180px' : '400px'};
        transition: height 0.3ms ease-out;
    }
`;