import React, { Component } from 'react';
import greendot from "./html-css/images/greendot.png";
import reddot from "./html-css/images/reddot.png";


class Liste_Co extends Component {
	/*constructor(props){
		super(props);
	}*/
	GoProfil(ami){
		this.props.profil(ami);
	}

	AfficheAmis(){
		var i
		var map1 = new Map();
		for(i=0; i<this.props.liste_ami.length; i++){
		  map1.set(this.props.liste_ami[i].friend,'hors ligne')
		}
		for(i=0; i<this.props.liste_co.length; i++){
		  if(map1.has(this.props.liste_co[i].guy)){
		    map1.set(this.props.liste_co[i].guy,'en ligne')
		  }
		}
		var iterator1 = map1[Symbol.iterator]();

		for (let item of iterator1) {
		  console.log(item[0]);
		  return <p> {item[0]} : {item[1]} </p>
		}

	}


	render() {
		var temp;
		if(this.props.liste_co === 'empty' || this.props.liste_co === undefined || this.props.liste_ami === 'empty' || this.props.liste_ami === undefined ){
			temp=<label>Personne co</label>;
		}
		else { 
					var i
					var map1 = new Map();
					for(i=0; i<this.props.liste_ami.length; i++){
					  map1.set(this.props.liste_ami[i].friend,'hors ligne')
					}
					for(i=0; i<this.props.liste_co.length; i++){
					  if(map1.has(this.props.liste_co[i].guy)){
					    map1.set(this.props.liste_co[i].guy,'en ligne')
					  }
					}
					console.log(map1);
					
					var liste = [];

					for(const item of map1.entries()){
						liste.push(item);
					}

					console.log(liste);

					
			temp=liste.map((mec) => {
					return <ul><input type="image" className="pt-4" width="10px" alt="extend" src={mec[1]==="en ligne" ? greendot : reddot} /><input type="button" className="btn line-h" onClick={() => this.GoProfil(mec[0])} value={mec[0]} /></ul>;
			});

			}
				

		return (
			<div>
				<h4>Liste des amis:</h4>
				<ul>
				{temp}
				</ul>
			</div>
		);
	}
}
export default Liste_Co;
