package tool;

import java.sql.Connection;
import java.sql.SQLException;
import java.sql.Statement;

public class AuthTools {
	public static StringBuilder insertNvlleSession(StringBuilder log,int root) {
		try {

			Connection conn= Database.getMySQLConnection();
			
			if(tool.CheckTools.alreadyConnected(log)) { 
				conn.close();
				return new StringBuilder();
			}
			
			StringBuilder alea=new StringBuilder().append(generate(16)); 
			String query="INSERT INTO session VALUES('"+log.toString()+"','"+alea.toString()+"','"+UserTools.getDate()+"','"+root+"')"; 			
			Statement st=conn.createStatement();
			st.executeUpdate(query);
			st.close();
			conn.close();
			return alea;
		}
		catch (SQLException s) {
			System.out.println(tool.ReturnJSON.serviceRefused("Erreur SQL", 110));
			return new StringBuilder();
		}
		
	}
	private static String generate(int length)
	{
		    String chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
		    String pass = "";
		    for(int x=0;x<length;x++)
		    {
		       int i = (int)Math.floor(Math.random() * 62);
		       pass += chars.charAt(i);
		    }
		    return pass;
	}
	
	public static void deconnexion(String key) { 
		try {
			Connection conn= Database.getMySQLConnection();
			
			String query="DELETE FROM session WHERE session.key_user='"+key+"'";
			Statement st=conn.createStatement();
			st.executeUpdate(query);
			st.close();
			conn.close();
		}
		catch (SQLException s) {
			System.out.println(tool.ReturnJSON.serviceRefused("Erreur SQL", 110));
		}
		
	}
	
	
}
