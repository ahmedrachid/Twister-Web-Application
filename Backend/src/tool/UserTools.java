package tool;


import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import org.json.JSONException;
import org.json.JSONObject;

public class UserTools {

	public static JSONObject insertUser(String nom, String prenom, String login, String psswd, String mail) {
		try {
			Connection conn= Database.getMySQLConnection();
			String query="INSERT INTO user VALUES ('"+login+"','"+psswd+"','"+prenom+"','"+nom+"','"+mail+"')";
			Statement st=conn.createStatement();
			int rs=st.executeUpdate(query);
			st.close();
			conn.close();
			if(rs==0)
				return tool.ReturnJSON.serviceRefused("Creation sans succes",103);
			return tool.ReturnJSON.serviceAccepted();
		}
		catch (SQLException s) {
			return tool.ReturnJSON.serviceRefused("Erreur SQL",110);
		}
	}
	public static boolean connected(String key) {
		try {
			Connection conn= Database.getMySQLConnection();
			
			String query="SELECT * FROM session WHERE session.key_user='"+key+"'";			
			Statement st=conn.createStatement();
			ResultSet rs=st.executeQuery(query);
			
			if(rs.next()) { 
				rs.close();
				st.close();
				conn.close();
				return true;
			}
			return false;
		}
		catch (SQLException s) {
			System.out.println(tool.ReturnJSON.serviceRefused("Erreur SQL", 110));
			return false;
		}
	}

	public static void AddFriend(String key, String logFriend) {

		try {		
			Connection conn= Database.getMySQLConnection();
			String loginUser=tool.UserTools.getLoginUser(key);			
			String date =getDate(); 
			String query="INSERT INTO friends VALUES ('"+loginUser+"','"+logFriend+"','"+date+"')";
			Statement st=conn.createStatement();
			st.executeUpdate(query);
			st.close();
			conn.close();			
		}
		catch (SQLException s) {
			System.out.println(tool.ReturnJSON.serviceRefused("Erreur SQL", 110));
			
		}
	}
	public static void RemoveFriend(String key, String logFriend) {

		try {
			Connection conn= Database.getMySQLConnection();
			String loginUser=tool.UserTools.getLoginUser(key);
			String query="DELETE FROM friends WHERE friends.log_user='"+loginUser+"' AND friends.log_friend='"+logFriend+"'";
			Statement st=conn.createStatement();
			st.executeUpdate(query);
			st.close();
			conn.close();
			
		}
		catch (SQLException s) {
			System.out.println(tool.ReturnJSON.serviceRefused("Erreur SQL", 110));
			
		}
	}
	public static String getDate() {
		Calendar call=Calendar.getInstance();
		SimpleDateFormat sdf=new SimpleDateFormat("YYYY-MM-dd HH:mm:ss");
		String date =sdf.format(call.getTime()); 
		return date;
	}

	public static String getLoginUser(String key) {
		try {
			String res="";
			Connection conn= Database.getMySQLConnection();
			String query="SELECT * FROM session WHERE session.key_user='"+key+"'";
			Statement st=conn.createStatement();
			ResultSet rs=st.executeQuery(query);
			if(rs.next()) { 
				res=rs.getString("login");
			}
			rs.close();
			st.close();
			conn.close();
			return res;
		}
		catch (SQLException s) {
			System.out.println(tool.ReturnJSON.serviceRefused("Erreur SQL", 110));
			return "";
		}
		
	}

	public static JSONObject listFriend(String log) {
		try {
			JSONObject res= new JSONObject();			
			
			Connection conn= Database.getMySQLConnection();
			String query="SELECT * FROM friends WHERE friends.log_user='"+log+"'";
			Statement st=conn.createStatement();
			ResultSet rs=st.executeQuery(query);
			while(rs.next()) { 
				res.append("friends",new JSONObject().put("friend",rs.getString("log_friend"))); 
			}
			
			rs.close();
			st.close();
			conn.close();
			return res;
		}
		catch (SQLException s) {
			return ReturnJSON.serviceRefused("Erreur SQL", 110);
		}
		catch (JSONException e) {
			return ReturnJSON.serviceRefused("Erreur JSON", 120);
		}
		
	}

	public static JSONObject listCo() {
		try {
			JSONObject res= new JSONObject();			
			
			Connection conn= Database.getMySQLConnection();
			String query="SELECT * FROM session";
			Statement st=conn.createStatement();
			ResultSet rs=st.executeQuery(query);
			while(rs.next()) { 
				res.append("connected",new JSONObject().put("guy",rs.getString("login")));
			}
			rs.close();
			st.close();
			conn.close();
			System.out.println(res);
			return res;
		}
		catch (SQLException s) {
			return ReturnJSON.serviceRefused("Erreur SQL", 110);
		}
		catch (JSONException e) {
			return ReturnJSON.serviceRefused("Erreur JSON", 120);
		}
	}
	
}
	
