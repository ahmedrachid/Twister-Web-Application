package tool;

import org.json.JSONException;
import org.json.JSONObject;

public class ReturnJSON {
	
	public static JSONObject serviceRefused(String message, int codeErreur) {
		try {
			JSONObject o=new JSONObject();
			o.put("code", codeErreur);
			o.put("message", message);
			return o;
			
		} catch (JSONException e) {
			System.out.println("Erreur JSON");
			e.printStackTrace();
		}
		
		return null;
		
	}
	
	public static JSONObject serviceAccepted() {
		return new JSONObject();
	}
}
