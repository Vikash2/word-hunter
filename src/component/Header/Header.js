import { createTheme, MenuItem, TextField, ThemeProvider } from '@material-ui/core';
import React from 'react'
import categories from '../../data/Category';
import './Header.css'


const Header = ({ category, setCategory, word, setWord }) => {
    const darkTheme = createTheme({
        palette: {
            primary: {
                main: '#FFF'
            },
            type: 'dark',
        },
    });

    const onHandleChange = (language) => {
        setCategory(language);
        setWord("");
    }
    return (
        <div className='header'>
            <span className='title'>Word Hunt</span>
            <div className="inputs">
                <ThemeProvider theme={darkTheme}>
                    <TextField className='search' label="Search a word" value={word} onChange={(e) => { setWord(e.target.value) }} />
                    <TextField
                        className='select'
                        select
                        label="Language"
                        value={category}
                        onChange={(e) => { onHandleChange(e.target.value) }}
                        helperText="Please select language"
                    >
                        {categories.map((option) => (
                            <MenuItem key={option.label} value={option.label}>
                                {option.value}
                            </MenuItem>
                        ))}
                    </TextField>
                </ThemeProvider>
            </div>
        </div >
    )
}

export default Header;
