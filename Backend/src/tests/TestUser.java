package tests;
import service.*;
import tool.CheckTools;

public class TestUser {
	
	public static void main(String[] args) {
		System.out.println(CheckTools.checkPasswd("tata", "mdp"));
		System.out.println(User.createUser("hi","hi","hi","hi","hi"));
		
	}
}
