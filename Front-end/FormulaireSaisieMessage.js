import React, { Component } from 'react';
import './html-css/css/bootstrap.min.css';
import './html-css/css/style.css';
import axios from 'axios';

class FormulaireSaisieMessage extends Component {
	
	send(message){
		if(message===''){
			alert("Message vide !!!");
		}
		else{
			const url= new URLSearchParams();
			url.append("key",this.props.Ukey);
			url.append("text",message);
			axios.get("http://localhost:8080/Twister/message/addmessage?"+url).then(res=> this.respmessage(res));
		}
	}
	 
	respmessage(resp){
		if(resp.data["code"]){
			alert(resp.data["message"]);
		}
		else{
			this.refresh();
		}
	}
	refresh(){
		const url= new URLSearchParams();
		url.append("key",this.props.Ukey);
		url.append("query",'');
		if(this.props.page === "Principale"){
			url.append("friends",'');
		}
		else{
      if(this.props.owner==="me"){
        url.append("friends",this.props.user);
      }
			else{
        url.append("friends",this.props.owner);
      }
		}

		axios.get("http://localhost:8080/Twister/message/listmessage?"+url).then(res=> this.respliste(res));
	}
	respliste(resp){
		if(resp.data["code"]){
			alert(resp.data["message"]);
		}
		else{
			this.props.refreshMsg(resp.data["messages"]);
		}
	}

	render(){
		return(
		<div className="card gedf-card">
                        <div className="card-header">
                            <ul className="nav nav-tabs card-header-tabs" id="myTab" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active" id="posts-tab" data-toggle="tab" href="#posts" role="tab" aria-controls="posts" aria-selected="true">Nouveau
                                        Message</a>
                                </li>
                            </ul>
                        </div>
                        <div className="card-body">
                                <div className="form-group">
									<textarea className="form-control w-85 fwhite" id="twist" rows="4"	placeholder="Exprimez-vous"></textarea>
                                  </div>
                                <div className="btn-group">

                                    <button type="submit" className="btn btn-primary" onClick={((event)=>{this.send(document.getElementById("twist").value);document.getElementById("twist").value=''})}>Partager</button>
                                </div>
                        </div>
                       </div>

		);
	}
}

export default FormulaireSaisieMessage;