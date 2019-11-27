package servlet;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.JSONObject;

import service.Friends;

/**
 * Servlet implementation class RemoveFriendServlet
 */
public class RemoveFriend extends HttpServlet {
       
    /**
     * @see HttpServlet#HttpServlet()
     */


	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		

		String key=request.getParameter("key");
		String logFriend=request.getParameter("login_friend");
		
		response.setContentType("text/json");
		PrintWriter out=response.getWriter();
		JSONObject o = Friends.removeFriend(key, logFriend);
		out.println(o);
	}

	

}
