import React from "react"
import './css/bootstrap.min.css';
import './css/Connexion.css';
import axios from 'axios'
class Login extends React.Component{

    constructor(props){
        super(props)

    }

  getListAmi(user){
    const url= new URLSearchParams();
    url.append("login",user);
    //alert("http://localhost:8080/Web/friends/list?"+url);
    axios.get("http://localhost:8080/Twister/friends/list?"+url).then(res=> this.respami(res));
  }
   
  respami(resp){
    //console.log(resp.data);
    if(resp.data["code"]){
      alert(resp.data["message"]);
    }
    else{
      //console.log(resp.data["friends"]);
      this.props.getListAmi(resp.data["friends"]);
    }
  }

  send(){
  	const url=new URLSearchParams();
  	url.append('login',this.refs.login.value);
  	url.append('password',this.refs.password.value);
  	axios.get('http://localhost:8080/Twister/user/login?'+url).then((response)=>{
  		 console.log(response.data);
  		 this.resplogin(response);

  	});
  }

  resplogin(resp){
    //console.log(resp.data);
    if(resp.data["code"]===203){
      alert("Déja connecté");
      /*const url= new URLSearchParams();
      url.append("key",this.props.Ukey);//CHOPER LA CLE
      axios.get("http://localhost:8080/Web/auth/logout?"+url).then(res=> this.resplogin(res));
      this.getListAmi(resp.data["Login"]);
      this.getListCo(resp.data["Key"]);
      this.props.login(resp.data["Login"],resp.data["Key"]);*/
    }

    else{
      this.getListAmi(resp.data["Login"]);
      this.getListCo(resp.data["Key"]);
      this.props.login(resp.data["Login"],resp.data["Key"]);
    }
  }
   getListCo(key){
    const url= new URLSearchParams();
    url.append("key",key);  
    axios.get("http://localhost:8080/Twister/listconnected?"+url).then(res=> this.respco(res));
  }
   
  respco(resp){
    //console.log(resp.data);
    if(resp.data["code"]){
      alert(resp.data["message"]);
    }
    else{
      //console.log(resp.data["friends"]);
      this.props.getListCo(resp.data["connected"]);
    }
  } 

  render(){
    return(
      <div id="blogin">
    	<div id="login">
	        <h3 className="text-center text-white pt-5">Twister</h3>
	        <div className="container"> 	
	            <div id="login-row" className="row justify-content-center align-items-center">
	                <div id="login-column" className="col-md-6">
	                    <div id="login-box" className="col-md-12">
	                        <form id="login-form" className="form" >
	                            <h3 className="text-center text-info">Connexion</h3>
	                            <div className="form-group">
	                                <label name="login" className="text-info">Login:</label><br></br>
	                                <input type="text" name="login" id="login" ref="login" className="form-control"></input>
	                            </div>
	                            <div className="form-group">
	                                <label name="password" className="text-info">Mot de passe:</label><br></br>
	                                <input type="password" name="password" id="password" ref="password"  className="form-control"></input>
	                            </div>
	                            <div className="form-group">
	                                <br></br>
	                                <input id="bouttonConnexion" type="submit" name="submit" className="btn btn-info btn-md" value="Connexion" onClick={()=>this.send()}></input>
	                            </div>
	                            <div id="register-link" className="text-right">
	                                <a href="#" className="text-info" onClick={()=>this.props.register()}>Créer un compte</a>
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
export default Login