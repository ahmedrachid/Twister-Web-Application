import React, { Component } from 'react';
import Message from './Message.js';

class Liste_msg extends Component{
	constructor(props){
		super(props);
		this.state={message:0,autor:0,date:0,listeCom:0,listeLike:0,id:0}
	}

	render() {
		var temp;
		//console.log(this.props.liste_msg);
		if(this.props.liste_msg === 'empty' || this.props.liste_msg === undefined ){
			temp=<label>Aucune publication</label>;
		}
		else { 
			temp=this.props.liste_msg.map(messages => {
					return <Message message={messages.message} autor={messages.login} date={messages.date} listeCom={messages.listeCom} listeLike={messages.listeLike} profil={this.props.profil} owner={this.props.owner} Ukey={this.props.Ukey} user={this.props.user} id={messages.id} refreshMsg={this.props.refreshMsg} delete={this.props.delete}/>;
			});
		}
		return (
           <div className="container"> 
					{temp}
			</div>
		);
	}
}


export default Liste_msg; 