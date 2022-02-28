import IconButton from '@mui/material/IconButton';
import { CardList } from "../CardList/CardList";
import { useState } from "react";
import axios from 'axios';
import {StyledSearchPage, classes, StyledSearchIcon, Search, StyledInputBase } from './styles';

export function SearherPage() {
    const [value, setValue] = useState('');
    const [isFocusedOn, setIsFocusedOn] = useState(false);
    const [bookData, setBookData] = useState([]);
    const searchBook = () => {
        axios.get(
            'https://www.googleapis.com/books/v1/volumes?q=' +
            value +
            '&key=AIzaSyC4NA9NUxrmSq0Cucb5gwNmwtv1U0mLWHE&maxResults=40'
        )
        .then((res) => setBookData(res.data.items))
        .catch((err) => console.log(err));
    };

    const handleInputKeyUp = (event) => {
        if (event.key === 'Enter') {
            searchBook();
        } 
    };
    
    return (
        <StyledSearchPage focused={isFocusedOn}>
            <div className={classes.titleContainer}>
                <p className={classes.title}>
                    Find book using a keyword search or a combination of words.
                </p>
            </div>
            <Search>
                <StyledInputBase
                    placeholder="Type author, book name... "
                    inputProps={{ 'aria-label': 'search' }}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    onKeyUp={handleInputKeyUp}
                    onFocus={() => setIsFocusedOn(true)}
                    startAdornment={
                        <IconButton onClick={searchBook}>
                            <StyledSearchIcon />
                        </IconButton>
                    }
                />
            </Search>
            <CardList books={bookData} searchValue={value}/>
        </StyledSearchPage>
    );
}