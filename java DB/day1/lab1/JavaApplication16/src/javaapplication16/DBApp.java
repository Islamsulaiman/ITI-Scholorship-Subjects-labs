/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package javaapplication16;

import java.sql.SQLException;
import java.util.Scanner;


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
        
        //default attributes.
        String url =  "jdbc:mysql://localhost:3306/java";
        String uname = "root";
        String pass = "islam";
        
        int settings = 3;
        ContactDAO testDb;
        
        System.out.println("Welcom to DB veiwer application...");
        Thread.sleep(4000);
        System.out.println(" ");
        
        System.out.println("You can add your DB data to connect to it if you want by the way..!");
        Thread.sleep(6000);
        System.out.println(" ");
        
        System.out.println("To avoid problems, add DB with this exact schema ..");
        System.out.println("id int unsigned not null auto_increment, name varchar(20), nick_name varchar(20), address varchar(128), home_phone varchar(10), work_phone varchar(10), cell_phone varchar(10), email varchar(100), birthday date, web_site varchar(100), profession varchar(100), primary key (id)");
        Thread.sleep(8000); 
        System.out.println(" ");
        
        System.out.println("If you dont have schema like this, I'll be happy for you to use the attached schema inside the file \"DB schema and data.txt\" in \"JavaApplication16\" folder");
        Thread.sleep(7000); 
        System.out.println(" ");
        
        
        System.out.println("Type \"1\" if you want to add your own DB data, \"2\" if you want to use the default settings ... ");
        Thread.sleep(5000);
        
        while(true){
            try{
                Scanner myObj = new Scanner(System.in);  // Create a Scanner object
                settings = myObj.nextInt();  // Read user input

                if(settings == 1 || settings == 2){
                    break;
                }else{
                    System.out.println("Please enter \"1\" or \"2\" ");
                }
            }catch (java.util.InputMismatchException ex){
                System.out.println("Please enter numbers only!");
                continue;
            }

        }

        
        if (settings == 1 ){    //user add the data
            Scanner myObj = new Scanner(System.in);  // Create a Scanner object
            
            System.out.println("Enter DB URL, hint ... <\"jdbc:mysql://yourHost:portNumber/DatabaseName\">");
            String userUrl = myObj.nextLine(); // Read user input
            
            System.out.println("Enter DB user name, hint ... <\"root\">");
            String userUname = myObj.nextLine(); // Read user input
            
            System.out.println("Enter DB password , hint ... <\"your user password\">");
            String userPass = myObj.nextLine(); // Read user input
            
            testDb = new ContactDAO( userUrl,  userUname, userPass);
            
        }if (settings == 2){
            testDb = new ContactDAO( url,  uname, pass);
        }else{
            testDb = new ContactDAO(url,  uname, pass);
        }
        
        
        
        
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

        

        testDb.disconnected(); //this is a function in contactDAO.
    }
}
