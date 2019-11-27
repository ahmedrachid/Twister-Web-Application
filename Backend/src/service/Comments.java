package service;

import org.json.JSONObject;

import tool.CheckTools;
import tool.MessageTools;
import tool.ReturnJSON;

public class Comments {
	public Comments() {}
	
	public static JSONObject postComment(String login,String id_message,String text) {
		if(!tool.CheckTools.alreadyConnected(new StringBuilder(login)))
			return tool.ReturnJSON.serviceRefused("Utilisateur déconnecté", 800);
		
		tool.MessageTools.addComment(login, id_message, text);
		return tool.ReturnJSON.serviceAccepted();
	}
	public static JSONObject removeComment(String login,String id_message,String id_comment) {
		if(!tool.CheckTools.alreadyConnected(new StringBuilder(login)))
			return tool.ReturnJSON.serviceRefused("Utilisateur déconnecté", 800);
		
		return tool.MessageTools.removeComment(login, id_message, id_comment);
	}

	
}