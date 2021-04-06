import React, { useState } from 'react';
import axios from 'axios';

function AdminForm(props) {
	
	const HandleForm = () => {
		return <form>
							<input type="title" value=""  placeholder="Title..."/>
							<textarea type="content" value="" placeholder="content..."></textarea>
						</form>;
	}
	const handleDelete = ()=>{
		let jwt = localStorage.getItem('jwt');
		axios.post('http://localhost:3333/articles/delete?jwt='+jwt+'&id='+props.item.id).then(res => {
			window.location.reload(false);
		})
	}

  return (
    <div id="form">
			<div className="fx-row">
				<button onClick={handleDelete} className="del">🗑</button>
			</div>
    </div>
  );
}


 
export default AdminForm;