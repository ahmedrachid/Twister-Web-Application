package service;

import org.json.JSONObject;

import tool.CheckTools;
import tool.ReturnJSON;
import tool.UserTools;

public class Friends {
	
	public static JSONObject addFriend(String key,String logFriend) { 
		
		if(!CheckTools.alreadyConnected(new StringBuilder(UserTools.getLoginUser(key))))
			return ReturnJSON.serviceRefused("Utilisateur Déconnecté", 501);
		
		if(!CheckTools.exist(logFriend)) 
			return ReturnJSON.serviceRefused("Ami inexistant", 502);

		if(CheckTools.isFriend(key, logFriend)) 
			return ReturnJSON.serviceRefused("Vous etes deja amis !", 503);
		tool.UserTools.AddFriend(key,logFriend);
			
		return ReturnJSON.serviceAccepted();
		
	}
	public static JSONObject removeFriend(String key,String logFriend) { 
		
		if(!CheckTools.alreadyConnected(new StringBuilder(UserTools.getLoginUser(key)))) {
			return ReturnJSON.serviceRefused("Utilisateur Déconnecté", 601);
		}
		
		if(!CheckTools.exist(logFriend)) {
			return ReturnJSON.serviceRefused("Ami non existant", 602);
		}
		
		if(!CheckTools.isFriend(key,logFriend)) {
			return ReturnJSON.serviceRefused("Vous n'est pas amis !", 603);
		}
		tool.UserTools.RemoveFriend(key,logFriend);		
		return ReturnJSON.serviceAccepted();
		
	}
	
	public static JSONObject listFriend(String log) {
		
		if(!CheckTools.alreadyConnected(new StringBuilder(log))) {
			return ReturnJSON.serviceRefused("Utilisateur Déconnecté", 1001);
		}
		return tool.UserTools.listFriend(log);
		
	}
}
