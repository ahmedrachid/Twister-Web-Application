package service;

import org.json.JSONException;
import org.json.JSONObject;
public class Auth {

	
	public Auth() {
	
	}

	public static JSONObject connexion(String login,String psswd,int root) {
		if(!tool.CheckTools.exist(login)) {
			return tool.ReturnJSON.serviceRefused("Utilisateur inexistant",201);
		}
		
		if(!tool.CheckTools.checkPasswd(login,psswd)) {
			return tool.ReturnJSON.serviceRefused("Mot de passe incorrect",202);
		}
		
		StringBuilder key=new StringBuilder().append(tool.AuthTools.insertNvlleSession(new StringBuilder(login),root)); 
		if(key.length()==0) { 
			return tool.ReturnJSON.serviceRefused("Utilisateur Deja Connecté", 203);
		}
		else {
			JSONObject js= new JSONObject();
			try {
				js.put("Login", login);
				js.put("Key", key);
			} catch (JSONException e) {
				return tool.ReturnJSON.serviceRefused("JSON Error", 100);
			}
			return js;
		}
	}
	public static JSONObject deconnexion(String key) {
		if(!tool.UserTools.connected(key))
			return tool.ReturnJSON.serviceRefused("Utilisateur déconnecté", 300);
		tool.AuthTools.deconnexion(key);
		return tool.ReturnJSON.serviceAccepted();	
	}
}
