package tests;
import org.json.JSONException;
import org.json.JSONObject;
import service.*;

public class TestConnection {

	public static void main(String[] args) {
		JSONObject o= Auth.connexion("tata", "mdp",0);
		try {
			System.out.println(o.toString());
			Auth.deconnexion(o.getString("Key"));
		} catch (JSONException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

}