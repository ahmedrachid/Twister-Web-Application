import React from "react"
import './css/bootstrap.min.css';
import './css/Principale.css';
import axios from "axios";
import logo from './html-css/images/Logo_White.png';
class NavBar extends React.Component{

  search(requete){
    alert("a faire");
  }
  profil(){
    this.props.profil("me");
  }
  deconnexion(){
    this.props.logout();
    const url= new URLSearchParams();
    url.append("key",this.props.Ukey);
    axios.get("http://localhost:8080/Twister/user/logout?"+url).then(res=> this.resplogin(res));

}
  resplogin(obj){
    

    const valeur = JSON.parse(JSON.stringify(obj));
      if(valeur.message === undefined){
        alert("Vous etes déconnecté");
      }else{
           this.props.logout();

      }  
    }
  

    principale(){
    this.props.principale();
  }
  
  follow(ami){
    const url= new URLSearchParams();
    url.append("key",this.props.Ukey);
    url.append("login_friend",ami);  
    axios.get("http://localhost:8080/Twister/user/addfriend?"+url).then(res=> this.respaddF(res));
  }

  respaddF(resp){
    if(resp.data["code"]){
      alert(resp.data["message"]);
    }
    else{
      alert("Ami ajouté !!!");
    }
  }
  unfollow(ami){
    const url= new URLSearchParams();
    url.append("key",this.props.Ukey);
    url.append("login_friend",ami);
    axios.get("http://localhost:8080/Twister/user/removefriend?"+url).then(res=> this.respremF(res));
  }

  
  respremF(resp){
    if(resp.data["code"]){
      alert(resp.data["message"]);
    }
    else{
      alert("Ami supprimé");
    }
  }



  render(){
    return(

 <div id="bprincipale">

      <div>
      <nav className="navbar navbar-expand-md navbar-light tete">
      <input type="image" width="50px" alt="Logo" src={logo} onClick={((event)=>this.principale())}/>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <div className="form-inline searchbar">
          <input className="form-control mr-sm-2" type="search" placeholder="@user" aria-label="Search"></input>
          <button className="btn btn-outline-light my-2 my-sm-0" type="submit" onClick={()=>this.search()}>Recherche</button>

        </div>
      </div>

      <div className="collapse navbar-collapse">
          <div className="form-inline searchbar">

            <input className="form-control mr-sm-2" id="ajout_ami" placeholder="add friend"></input>
            <button type="submit" className="btn btn-outline-light my-2 my-sm-0" onClick={((event)=>{this.follow(document.getElementById("ajout_ami").value);document.getElementById("ajout_ami").value=''})}>Ajoute Ami</button>
        </div>
      </div>
      <div className="collapse navbar-collapse">
          <div className="form-inline searchbar">

            <input className="form-control mr-sm-2" id="supp_ami" placeholder="remove friend"></input>
            <button type="submit" className="btn btn-outline-light my-2 my-sm-0" onClick={((event)=>{this.unfollow(document.getElementById("supp_ami").value);document.getElementById("supp_ami").value=''})}>Supprimer Ami</button>
        </div>
      </div>      

      <div>
      <button type="submit" className="btn btn-outline-light my-2 my-sm-0" href="#" onClick={()=>this.deconnexion()}>Déconnexion</button>
      </div>
    </nav>
    </div>
    </div>


    );
  }
}

export default NavBar;

