import React, { Component } from 'react';
import FormulaireSaisieMessage from './FormulaireSaisieMessage.js';
import NavBar from './NavBar';
import Liste_msg from './Liste_msg';
import Liste_Co from './Liste_Co';
import Informations from './Informations';
import axios from 'axios';

class Principale extends React.Component{

    constructor(props){
        super(props)
         }
  componentDidMount(){
    const url= new URLSearchParams();
    url.append("key",this.props.Ukey);
    url.append("query",'');
    if(this.props.page === "Principale"){
      url.append("friends",'');
    }
    else{
      url.append("friends",this.props.liste_ami);
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
      <div className="Principale">
        <NavBar logout={this.props.logout} principale={this.props.principale} profil={this.props.profil} user={this.props.user} Ukey={this.props.Ukey}/>
        <div className="container-fluid gedf-wrapper">
        <br/>
        <div className="row">
        <Informations liste_ami={this.props.liste_ami} user={this.props.user} liste_msg={this.props.liste_msg}/>
          <div className="col-md-6 gedf-main column white">            
              <FormulaireSaisieMessage login={this.props.login} Ukey={this.props.Ukey} liste_ami={this.props.liste_ami} refreshMsg={this.props.refreshMsg} owner={this.props.owner} user={this.props.user} page={this.props.page}/>
              <Liste_msg liste_msg={this.props.liste_msg} profil={this.props.profil} delete={this.props.delete} deleteCom={this.props.deleteCom} owner={this.props.owner} user={this.props.user} page={this.props.page} Ukey={this.props.Ukey} refreshMsg={this.props.refreshMsg}/>
          </div>

          <div className="col-md-3">
               <div className="card">
                  <div className="card-body">
                        <Liste_Co liste_co={this.props.liste_co} liste_ami={this.props.liste_ami} profil={this.props.profil} Ukey={this.props.Ukey}/>
                       </div>
               </div>
          </div>
        </div>
        </div>
      </div>
    );
  }
}
export default Principale