import React, { Component } from 'react';
import Commentaire from './Commentaire.js';
import axios from 'axios';
import './html-css/css/bootstrap.min.css';
import './html-css/css/style.css';

class Liste_Commentaire extends Component{
	constructor(props){
		super(props);
		this.state={listeCom:this.props.listeCom};
	}
	send(comm){
		const url= new URLSearchParams();
		url.append("login",this.props.login);
		url.append("id_message",this.props.id_msg);
		url.append("text",comm);
		axios.get("http://localhost:8080/Twister/message/addcomment?"+url).then(res=> this.respcomm(res));
	}
	respcomm(resp){
		if(resp.data["code"]){
			alert(resp.data["message"]);
		}
		else{
				this.props.refresh();
		}
	}

	

	componentWillReceiveProps(nextProps){
		this.setState({listeCom:nextProps.listeCom});
	}

	render(){
		var temp;
		console.log(this.state.listeCom[0])
		
		if(this.state.listeCom[0].length !== 0){
			temp=this.state.listeCom[0].map(commentaires => {
							return <Commentaire getprof={this.props.getprof} commentaire={commentaires.content} autor={commentaires.author} date={commentaires.date}/>;
			});
		}
		else { 
			temp=<label>Ajoutez un commentaire</label>;
		}
		return(
			<div className="container"> 
				<div className="row topbar">
					<ul className="list-unstyled w-85">
						{temp}
					</ul>
					<div className="form-inline pt-1 w-100 ">
						<textarea className="form-control w-75" id="comm" placeholder="Commentaire"></textarea>
						<div className="w-25">
						    <button type="submit" className="btn btn-primary" onClick={((event)=>{this.send(document.getElementById("comm").value);document.getElementById("comm").value=''})}>Envoyer</button>
						</div>
					</div>
				</div>
				<div className="pt-1" ></div>
			</div>
		);
	}
}
export default Liste_Commentaire;