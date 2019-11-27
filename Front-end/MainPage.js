import React, { Component } from 'react';
import NavigationPannel from './NavigationPannel.js';
import axios from 'axios';

class MainPage extends Component {
	constructor(props){
		super(props);
		this.state={connected:false,page:"Login",owner:"me",user:"",Ukey:"",liste_ami:"empty",liste_msg:"empty",liste_co:"empty"};
		this.getConnected = this.getConnected.bind(this);
		this.setLogout = this.setLogout.bind(this);
		this.getRegister = this.getRegister.bind(this);
		this.getProfil = this.getProfil.bind(this);
		this.getListAmi = this.getListAmi.bind(this);
		this.refreshMsg = this.refreshMsg.bind(this);
		this.getPrincipal = this.getPrincipal.bind(this);
		this.delete = this.delete.bind(this);
		this.getListCo = this.getListCo.bind(this);
	}

	getConnected(login,key){
		this.setState({connected:true,page:"Principale",user:login,Ukey:key});
	}
	getPrincipal(){
		this.setState({page:"Principale"});
	}
	setLogout(){
		this.setState({connected:false,page:"Login"});
	}
	getRegister(){ 
		this.setState({connected:false,page:"Register"});
	}
	getProfil(wantedProfil){
		const url= new URLSearchParams();
		url.append("key",this.state.Ukey);
		url.append("query",'');
		if(wantedProfil==="me"){
			url.append("friends",this.state.user);
		}
		else{
			url.append("friends",wantedProfil);
		}
		//console.log("http://localhost:8080/Web/message/listmessage?"+url);
		axios.get("http://localhost:8080/Twister/message/listmessage?"+url).then(res=> this.respliste(res,wantedProfil));
		
	}
	respliste(resp,wantedProfil){
		if(resp.data["code"]){
			alert(resp.data["message"]);
		}
		else{
			this.setState({page:"Profil",owner:wantedProfil,liste_msg:resp.data["messages"]});
		}
	}
	getListAmi(liste){
		this.setState({liste_ami:liste});
	}
	refreshMsg(listeM){
		this.setState({liste_msg:listeM});
	}
	delete(msg){
		const url= new URLSearchParams();
		url.append("id",msg);
		url.append("key",this.state.Ukey);
		axios.get("http://localhost:8080/Twister/message/removemessage?"+url).then(this.getPrincipal());
	}
	getListCo(liste){
		this.setState({liste_co:liste});
		//console.log(this.state.liste_co)
	}

	render(){
		return(
			<div className="MainPage">
				<NavigationPannel login={this.getConnected} logout={this.setLogout} register={this.getRegister} profil={this.getProfil} connected={this.state.connected} page={this.state.page} 
					principale={this.getPrincipal} owner={this.state.owner} liste_msg={this.state.liste_msg} user={this.state.user} Ukey={this.state.Ukey} 
					getListAmi={this.getListAmi} liste_ami={this.state.liste_ami} refreshMsg={this.refreshMsg} delete={this.delete} liste_co={this.state.liste_co} getListCo={this.getListCo}/>
			</div>);
	}
}


export default MainPage;
