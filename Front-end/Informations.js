import React from "react"



class Informations extends React.Component{

    constructor(props){
        super(props)
         }



render(){
    var amis
    if(typeof(this.props.liste_ami) !=='undefined'){
        amis=this.props.liste_ami.length
    }else{
        amis=0
    }
return(
                <div className="col-md-3">
                    <div className="card">
                        <div className="card-body">
                            <div className="h5"> @{this.props.user}</div>
                            <div className="h7 text-muted">Fullname : *name*</div>
                            <div className="h7">*informations*
                            </div>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <div className="h6 text-muted">Amis</div>
                                <div className="h5">{amis}</div>
                            </li>
                            <li className="list-group-item">
                                <div className="h6 text-muted">Publications</div>
                                <div className="h5">{this.props.liste_msg ? this.props.liste_msg.length : 0 }</div>
                            </li>
                        </ul>
                    </div>
                </div>
	);
	}
}
export default Informations;