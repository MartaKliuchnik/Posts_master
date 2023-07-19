import React, { useContext } from 'react';
import s from './index.module.css';
import { Context } from '../context';

export default function AddPostForm() {
    const { createNewPost } = useContext(Context);

    const submit = (e) => {
        e.preventDefault();
        const { text, title } = e.target;
        createNewPost({
            title: title.value,
            text: text.value
        })
        title.value = '';
        text.value = '';
    }
    return (
        <form className={s.addPostForm} onSubmit={submit}>
            <input type="text" name='title' placeholder='Your title'/>
            <input type="text" name='text' placeholder='Your text' />
            <button>Add post</button>
        </form>
    )
}
