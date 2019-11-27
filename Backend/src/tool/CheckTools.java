package tool;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class CheckTools {
	public static boolean checkUserConnected(String key) {
		try {
			Connection conn= Database.getMySQLConnection();
			String query="SELECT * FROM session WHERE session.key_user='"+key+"'";
	
			Statement st=conn.createStatement();
			ResultSet rs=st.executeQuery(query);
			
			
			if(rs.next()) { 
				if(Integer.parseInt(rs.getString("root"))==1) {
					
					rs.close();
					st.close();
					conn.close();
					return true;
				}
				if(!checkKeyValidity(rs.getString("date_connexion"),key)) {
					AuthTools.deconnexion(key);
					rs.close();
					st.close();
					conn.close();
					return false;
				}
				
				String update="UPDATE session SET date_connexion='"+UserTools.getDate()+"' WHERE key_user='"+key+"'";
				st.executeUpdate(update);
				
				rs.close();
				st.close();
				conn.close();
				return true;
			}
			
			rs.close();
			st.close();
			conn.close();
			return false;
		}
		catch (SQLException s) {
			System.out.println(tool.ReturnJSON.serviceRefused("Erreur SQL", 100));
			return false;
		}
		
		
	}
	
	public static boolean checkKeyValidity(String date,String key) {
		String d_current=UserTools.getDate();
		Date current = null;
		Date key_date = null;
		try {
			current = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").parse(d_current);
			key_date = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").parse(date);
		} catch (ParseException e) {
			e.printStackTrace();
		}
		long seconds = (current.getTime() - key_date.getTime())/3600000;
		
		System.out.println(seconds);
		if(seconds >= 0) {
			AuthTools.deconnexion(key);
			return false;
		}
			
		return true;
	}
	public static boolean checkPasswd(String login, String psswd) {
		try {
			
			boolean res=false;
			Connection conn= Database.getMySQLConnection();
			String query="SELECT * FROM user WHERE user.login='"+login+"' AND user.password='"+psswd+"'";
			
			Statement st=conn.createStatement();
			ResultSet rs=st.executeQuery(query);

			if(rs.next() && rs.getString("password").equals(psswd)) { 
				res=true;
			}
			rs.close();
			st.close();
			conn.close();
			return res;
		}
		catch (SQLException s) {
			System.out.println(tool.ReturnJSON.serviceRefused("Erreur SQL", 100));
			return false;
		}
	}
	
	public static boolean exist(String login) {
		try {
			Boolean res=false;
			Connection conn= Database.getMySQLConnection();
			String query="SELECT * FROM user as u WHERE u.login='"+login+"'";
			
			Statement st=conn.createStatement();
			ResultSet rs=st.executeQuery(query);
			
			if(rs.next()) {
				res=true;
			}
			rs.close();
			st.close();
			conn.close();
			return res;
		}
		catch (SQLException s) {
			System.out.println(tool.ReturnJSON.serviceRefused("Erreur SQL", 100));
			return false;
		}
		
	}

	public static boolean alreadyConnected(StringBuilder log) { 
		try {
			
			Connection conn= Database.getMySQLConnection();
			
			String query="SELECT * FROM session WHERE session.login='"+log.toString()+"'";
			
			Statement st=conn.createStatement();
			ResultSet rs=st.executeQuery(query);
			
			if(rs.next()) { 
				rs.close();
				st.close();
				conn.close();
				return true;
			}
			rs.close();
			st.close();
			conn.close();
			return false;
		}
		catch (SQLException s) {
			System.out.println(tool.ReturnJSON.serviceRefused("Erreur SQL", 110));
			return false;
		}
		
	}
	public static boolean isFriend(String key, String logFriend) {
		try {
			
			Connection conn= Database.getMySQLConnection();
			String loginUser=tool.UserTools.getLoginUser(key);			
			String query="SELECT * FROM friends WHERE friends.log_user='"+loginUser+"' AND friends.log_friend='"+logFriend+"'";
			Statement st=conn.createStatement();
			ResultSet rs=st.executeQuery(query);
			if(rs.next()) { 
				rs.close();
				st.close();
				conn.close();
				return true;
			}
			rs.close();
			st.close();
			conn.close();
			return false;
			
		}
		catch (SQLException s) {
			System.out.println(tool.ReturnJSON.serviceRefused("Erreur SQL", 110));
			return false;
		}
	}
	
	
	
	
}
