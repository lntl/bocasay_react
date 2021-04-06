import React, { useState, useEffect } from 'react';
import axios from 'axios';
import jwt_decode from "jwt-decode";
import AdminForm from './AdminForm'
import AddArticle from './AddArticle'

function ArticlesList() {
	const [articles, setArticles] = useState({list:[]});
	const [user, setUser] = useState({infos:[]});
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => { getAllArticles()}, []);

	const getAllArticles = async () =>{
		let jwt = localStorage.getItem('jwt');
		var decoded = jwt_decode(jwt);
		setUser({infos:decoded})
		axios.get('http://localhost:3333/articles/list?jwt='+jwt).then(res => {
					setArticles({list:res.data});
		})
	}

	const RenderArticleForm = (data) => {
		if(data.item.user_id===user.infos.id) {
			return <AdminForm item={data.item}/>
		} else {
			return null
		}
	}
	

  return (
    <div id="list">
      <h1>List of Articles</h1>
			<button onClick={() => setIsVisible((isVisible) => !isVisible)}>Add article</button>
			
			<div className={`box ${isVisible ? "" : "hidden"}`}>
				<AddArticle className={`box ${isVisible ? "" : "hidden"}`}/>
			</div>
			<ul>
				{articles.list.map(item => (
					<li className="article" key={item.id}>
						<div className="title">
							<div>{item.title}</div>
							<div className="sub">Created by {item.author}</div>
						</div>
						<div className="content">{item.content}</div>
						<RenderArticleForm item={item}/>
					</li>
				))}
			</ul>
    </div>
  );
}



 
export default ArticlesList;