package service;

import org.json.JSONObject;

import tool.CheckTools;
import tool.MessageTools;
import tool.ReturnJSON;
import tool.UserTools;

public class Message {
	public Message() {}
	public static JSONObject postMessage(String key, String text) {
		if(!CheckTools.alreadyConnected(new StringBuilder(UserTools.getLoginUser(key))))
			return ReturnJSON.serviceRefused("Utilisateur Déconnecté", 401);
		
		return tool.MessageTools.postMessage(key, text);
	}
	public static JSONObject listMessage(String key, String query ,String friends) {
		if(!CheckTools.alreadyConnected(new StringBuilder(UserTools.getLoginUser(key))))
			return ReturnJSON.serviceRefused("Utilisateur Déconnecté", 701);
		if(!query.isEmpty() && friends.isEmpty())
			return MessageTools.listByQuery(key,query);
		else if(!friends.isEmpty() && query.isEmpty())
			return MessageTools.listProfile(key,friends);
		else
			return MessageTools.listAllMessage(key);
	}
	public static JSONObject removeMessage(String key,String id) {
		if(!CheckTools.alreadyConnected(new StringBuilder(UserTools.getLoginUser(key))))
			return ReturnJSON.serviceRefused("Utilisateur Déconnecté", 402);
		
		return MessageTools.removeMessage(id);
	}

	
}
