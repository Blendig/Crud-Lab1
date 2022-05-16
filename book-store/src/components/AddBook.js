import { Box, Button, Checkbox, FormControlLabel, FormLabel, TextField } from '@material-ui/core';
import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddBook = () => {
    const history = useNavigate();
    const [inputs, setInputs] = useState({
        name:'',
        description:'',
        price: '',
        author:'',
        
        image:'',
    });
    const [checked, setChecked] = useState(false);
    const handleChange = (e) => {
       setInputs((prevState) => ({
          ...prevState,
        [e.target.name]: e.target.value,
        }));
       // console.log(e.target.name,'Value',e.target.value);
    };

    const sendRequest = async () =>{
       await axios.post("http://localhost:5001/books", {
            name: String(inputs.name),
            author: String(inputs.author),
            description: String(inputs.description),
            price: Number(inputs.price),
            image: String(inputs.image),
            available: Boolean(checked)

        }).then(res=>res.data);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputs, checked);
        sendRequest().then(()=>history("/books"))
    }
    return(
    <form onSubmit={handleSubmit}>
        <Box 
        display="flex" 
        flexDirection="column" 
        justifyContent={"center"} 
        maxWidth={700}
        alignContent={"center"}
        alignSelf="center"
        marginLeft={"auto"}
        marginRight={"auto"}
        marginTop={10}

    >
    <FormLabel>Name</FormLabel>
    <TextField value={inputs.name} onChange={handleChange} required="true" margin="normal" fullWidth variant ="outlined" name="name"/>
    <FormLabel>Author</FormLabel>
    <TextField value={inputs.author} onChange={handleChange} required="true" margin="normal" fullWidth variant ="outlined" name="author"/>
    <FormLabel>Description</FormLabel>
    <TextField
    value={inputs.description} 
    onChange={handleChange}
    required="true"
    margin="nomral"
    fullWidth
    variant="outlined"
    name="description"
    />
    <FormLabel>Views</FormLabel>
    <TextField 
    value={inputs.price} 
    onChange={handleChange}
    required="true"
    type="number" 
    margin="normal" 
    fullWidth variant ="outlined" 
    name="price"/>
    <FormLabel>Image</FormLabel>
    <TextField 
    value={inputs.image} 
    onChange={handleChange}
    required="true"
    margin="normal" 
    fullWidth variant ="outlined" 
    name="image"
    />
     <FormControlLabel control=
     {<Checkbox checked={checked} onChange={() =>setChecked(!checked)} />} label="Available" />
    <Button style={{backgroundColor:"#C0C0C0"}} variant="contained" type="submit">Add News</Button>
    </Box>
    </form>
    );
};

export default AddBook;