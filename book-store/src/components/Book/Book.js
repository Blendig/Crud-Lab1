import { Button } from '@material-ui/core';
import axios from 'axios';
import React, {} from 'react';
import { Link, useNavigate } from 'react-router-dom';

import './Book.css';

const Book = (props) => {
    const history = useNavigate
    const{_id,name,author,description,price,image} =props.book;
    const deleteHandler = async () => {
        await axios
        .delete(`http://localhost:5001/books/${_id}`)
        .then((res) =>res.data)
        .then(()=> history("/"))
        .then(()=> history("/books"));
    }
    return (
        <div className= "card">
        <img src={image} alt={name}/>
        <article>By {author}</article>
        <h3>{name}</h3>
        <p>{description}</p>
        <h3>Views {price}</h3>
        <Button Link={Link} href={`/books/${_id}`}> Update</Button>
        <Button onClick={deleteHandler} className="button">Delete</Button>
    </div>
    );
};

export default Book;