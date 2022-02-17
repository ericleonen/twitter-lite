import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import './SearchBar.css';
import { fetchPosts } from '../../features/posts/postsSlice';

export const SearchBar = () => {
    const dispatch = useDispatch();

    const [text, setText] = useState('');

    const handleChange = e => {
        setText(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (text.length > 0) {
            dispatch(fetchPosts(text));
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input id="textbox" type="text" value={text} onChange={handleChange} placeholder="What do you want to search?"/>
            <button id="submit-btn" onClick={handleSubmit}><FontAwesomeIcon icon={faSearch} /></button>
        </form>
    );
}