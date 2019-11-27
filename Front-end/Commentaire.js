import React, { Component } from 'react';
import './html-css/css/bootstrap.min.css';
import './html-css/css/style.css';

class Commentaire extends Component{
	constructor(props){
		super(props);
		this.state={commentaire:this.props.commentaire,autor:this.props.autor,date:this.props.date};
	}

	render() {
		var split=this.state.date.split(' ');
		var jour=split[0].split('-');
		var heure=split[1].split(':',2);
		var annee=jour[0].split('');
		var date=jour[2]+"/"+jour[1]+"/"+annee[2]+annee[3]+" "+heure[0]+":"+heure[1];

					if(typeof(this.state.autor)===undefined){
						return(<div></div>);
					}else{
				return (
					<div className="card gedf-card">
                        <div className="card-header">
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="d-flex justify-content-between align-items-center">
            
                                    <div className="ml-2">
                                        <h4 className="btn pseudo pl-1" onClick={() => this.props.getprof(this.state.autor)} value={this.state.autor}>
                                        @{this.state.autor}
                                       </h4>
                                    </div>
                                </div>                                                                         										
                            </div>
                               <p align="right">{date}</p> 
                        </div>
                        <div className="card-body">
								{this.state.commentaire}
                        </div>
                    </div>


		);
					}
	}
}

export default Commentaire;