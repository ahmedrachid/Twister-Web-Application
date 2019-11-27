package tests;

import service.Comments;
import service.Likes;
import service.Message;
import tool.*;

public class TestMongo {
	public static void main(String[] args) {
	Comments.postComment("wow   ", "lkjlkjazdakljd", "lol");
	Message.postMessage("kmladzklm", "loool !");
	Comments.postComment("kljlajdza12", "woowo", "heelloooo");
	}
	
}
