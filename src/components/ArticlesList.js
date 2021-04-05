import React, { useState, useEffect } from 'react';
import axios from 'axios';


function ArticlesList() {
	const [articles, setArticles] = useState({ list : [ ] });
	useEffect(() => {
		getAllArticles()
	}, []);
	const getAllArticles = async () =>{
		let jwt = localStorage.getItem('jwt');
		axios.get('http://localhost:3000/articles/list?jwt='+jwt).then(res => {
					setArticles({list:res.data});
		})
	}
  return (
    <div id="list">
      List des Articles
			<ul>
				{articles.list.map(item => (
					<li className="article" key={item.id}>
						<div className="title">
							<div>{item.title}</div>
							<div className="sub">Created by {item.author}</div>
						</div>
						<div>{item.content}</div>
					</li>
				))}
			</ul>
    </div>
  );
}


 
export default ArticlesList;