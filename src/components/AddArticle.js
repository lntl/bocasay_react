
import React, { useState } from 'react';
import jwt_decode from "jwt-decode";
import axios from 'axios';

function AddArticle(props) {
	const title = useFormInput('');
  const content = useFormInput('');
	const HandleSubmit = (e) => {
		e.preventDefault();
		let jwt = localStorage.getItem('jwt');
		let user = jwt_decode(jwt);
		console.log(user);
		axios.post('http://localhost:3333/articles/create?jwt='+jwt, {
			author:user.firstname+' '+user.lastname,
			user_id:user.id,
			title:title.value,
			content:content.value,
		}).then(res => {
			window.location.reload(false);
		})
	}

  return (
			<form onSubmit={HandleSubmit}  id="form">
				<h1>Add Article</h1>
				<input type="title" {...title}  placeholder="Title..."/>
				<textarea type="content" {...content} placeholder="Content..."></textarea>
				<button>Submit</button>
			</form>
  );
}

const useFormInput = initialValue => {
  const [value, setValue] = useState(initialValue);
  const handleChange = e => {setValue(e.target.value);}
  return {value,onChange: handleChange}
}
 
export default AddArticle;