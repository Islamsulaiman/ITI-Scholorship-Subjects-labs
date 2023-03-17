/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package javaapplication16;

import gui.JavaFXApplication;
import java.sql.SQLException;
import java.util.Scanner;
import javafx.application.Application;


/**
 *
 * @author Islam Sulaiman
 */
public class DBApp {
            

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) throws SQLException, InterruptedException {
        // TODO code application logic here
                
//        int settings = 3;
        ContactDAO testDb;
        
        System.out.println("Welcom to DB veiwer application...");
        Thread.sleep(3000);
        System.out.println(" ");
        
        
        
        testDb = new ContactDAO();
        
        //testDb.addContact("name","nickName" , "address" , "home_phone" , "work_phone", "cell_phone" , "email","web_site" ,"profession");      //try add
        //testDb.updateContact("Batman" , 2);       //try update

        testDb.getContacts().forEach(s->{
            System.out.println(s.getId() +"-" + s.getName() + "-" +  s.getNickName()  +"-"+ s.getAddress() + "-" + s.getBirthday() + "-" + s.getEmail() +"-"+ s.getProfession());
        });

        
        
        
        // // try delete functionality, open the following block of code to try deleting
        
//        testDb.deleteContactById( 2);
//        System.out.println("-----------------------------------");
//        System.out.println("After deleting");
//        testDb.getContacts().forEach(s->{
//            System.out.println(s.getId() +"-" + s.getName() + "-" +  s.getNickName()  +"-"+ s.getAddress() + "-" + s.getBirthday() + "-" + s.getEmail() +"-"+ s.getProfession());
//        });
//        System.out.println("-----------------------------------");

        
        Application.launch(JavaFXApplication.class, args);

        testDb.disconnected(); //this is a function in contactDAO.
    }
}
