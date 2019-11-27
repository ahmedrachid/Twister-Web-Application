import React, { Component } from 'react';
import SignUp from './SignUp';
import Principale from './Principale';
import Login from './Login';
import Profil from './Profil';

class NavigationPannel extends Component{
	/*constructor(props){
		super(props);
	}*/

	render(){
		var temp;
		if (this.props.page === "Register"){
			temp=<SignUp logout={this.props.logout} login={this.props.login}/>;
		}else if (this.props.page === "Profil"){
			temp=<Profil getListAmi={this.props.getListAmi} delete={this.props.delete} deleteCom={this.props.deleteCom} liste_co={this.props.liste_co} login={this.props.login} logout={this.props.logout} page={this.props.page} profil={this.props.profil} principale={this.props.principale} owner={this.props.owner} liste_msg={this.props.liste_msg} liste_ami={this.props.liste_ami} user={this.props.user} Ukey={this.props.Ukey} refreshMsg={this.props.refreshMsg}/>
		}else if (this.props.connected){
			temp=<Principale liste_co={this.props.liste_co} delete={this.props.delete} deleteCom={this.props.deleteCom} login={this.props.login} logout={this.props.logout} page={this.props.page} profil={this.props.profil} principale={this.props.principale}	owner={this.props.owner} liste_msg={this.props.liste_msg} liste_ami={this.props.liste_ami} user={this.props.user} Ukey={this.props.Ukey} refreshMsg={this.props.refreshMsg}/>;
		}else {
			temp=<Login login={this.props.login} logout={this.props.logout} register={this.props.register} getListAmi={this.props.getListAmi} refreshMsg={this.props.refreshMsg} getListCo={this.props.getListCo}/>;
		}
		
		return (
			<div className="NaviagtionPannel">
				<nav>
					{temp}
				</nav>
			</div>);
	 }
}
export default NavigationPannel;