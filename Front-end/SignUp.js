import React from "react"
import './css/bootstrap.min.css';
import './css/Enregistrement.css';
import axios from 'axios';
class SignUp extends React.Component{

    constructor(props){
        super(props);
         }
    send(){
    	const url=new URLSearchParams();  
	  	url.append('login',this.refs.login.value);
	  	url.append('password',this.refs.password.value);
	  	url.append('nom',this.refs.nom.value);
	  	url.append('prenom',this.refs.prenom.value);
	  	url.append('mail',this.refs.mail.value);

	  	axios.get('http://localhost:8080/Twister/user/create?'+url).then(response=>{
  		 console.log(response.data);
  		     	this.resplogin(response.data);


  		});
    }
    resplogin(obj){
    	const valeur = JSON.parse(JSON.stringify(obj));
  		if(valeur.message === undefined){

			this.props.logout();
  		}else if(valeur.message){
  			 alert("Informations manquantes !!!!");

  		}
  		else{
  			alert("Login deja existant !!");

  		}
    	
    }

  render(){
    return (
    	<div id="bcreate">
	     <div id="create">
	        <h3 className="text-center text-white pt-5">Twister</h3>
	        <div className="container">
	            <div id="login-row" className="row justify-content-center align-items-center">
	                <div id="login-column" className="col-md-6">
	                    <div id="login-box" className="col-md-12">
	                        <form id="login-form" className="form" >
	                            <h3 className="text-center text-info">Créer un compte</h3>
	                            <div className="form-group">
	                                <label name="username" className="text-info">Prénom:</label><br></br>
	                                <input type="text" name="prenom" id="prenom" ref="prenom" className="form-control"></input>
	                            </div>
	                            <div className="form-group">
	                                <label name="username" className="text-info">Nom:</label><br></br>
	                                <input type="text" name="nom" id="nom" ref="nom" className="form-control"></input>
	                            </div>
	                            <div className="form-group">
	                                <label name="username" className="text-info">Login:</label><br></br>
	                                <input type="text" name="login" id="login" ref="login" className="form-control"></input>
	                            </div>
	                            <div className="form-group">
	                                <label name="password" className="text-info">Mot de passe:</label><br></br>
	                                <input type="password" name="password" id="password" ref="password" className="form-control"></input>
	                            </div>
	                            <div className="form-group">
	                                <label name="mail" className="text-info">Mail:</label><br></br>
	                                <input type="text" name="mail" id="mail" ref="mail" className="form-control"></input>
	                            </div>
	                            <div className="form-group">
	                                <br></br>
	                                <input type="submit" name="submit" className="btn btn-info btn-md" value="Créer un compte" onClick={()=>this.send()} ></input>
	                            </div>
	                        </form>
	                    </div>
	                </div>
	            </div>
	        </div>
	    </div>
	    </div>
    	);
  
  }
}
export default SignUp