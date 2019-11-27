package service;

import org.json.JSONObject;

import tool.CheckTools;
import tool.ReturnJSON;

public class Likes {
	public Likes() {}
	
	public static JSONObject addLike(String login,String id_message) {
		if(!CheckTools.alreadyConnected(new StringBuilder(login)))
			return ReturnJSON.serviceRefused("Utilisateur Déconnecté", 901);
		
		tool.MessageTools.addLike(login, id_message);
		return ReturnJSON.serviceAccepted();
	}
	
	public static JSONObject removeLike(String login,String id_message) {
		if(!CheckTools.alreadyConnected(new StringBuilder(login)))
			return ReturnJSON.serviceRefused("Utilisateur Déconnecté", 902);
		
		tool.MessageTools.removeLike(login, id_message);
		return ReturnJSON.serviceAccepted();
	}
}
