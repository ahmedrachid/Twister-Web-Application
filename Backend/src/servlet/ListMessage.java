package servlet;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.JSONObject;

import service.Message;

public class ListMessage extends HttpServlet {

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String key=request.getParameter("key");
		String query=request.getParameter("query");
		String friends=request.getParameter("friends");
		

		response.setContentType("text/json");
		PrintWriter out=response.getWriter();
		JSONObject o = Message.listMessage(key, query, friends);
		out.println(o);
	}

}
