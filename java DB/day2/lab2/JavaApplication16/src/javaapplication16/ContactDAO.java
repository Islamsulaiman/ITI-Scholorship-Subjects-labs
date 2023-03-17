/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package javaapplication16;
import java.util.List;

import java.sql.DriverManager;
//import java.sql.Connection;
import java.sql.SQLException;
import java.sql.Statement;
import java.sql.ResultSet;
import java.util.ArrayList;

/**
 *
 * @author Islam Sulaiman
 */
public class ContactDAO {
    
    // if the user input his/her data
        private String url;
        private String uname; 
        private String pass;
    
        private java.sql.Connection con;
//        private java.sql.Connection conn;
        private boolean conFlag = false;    //to check connection state, default to false until connected
        
        
    //default constructor to take from prop file
    public ContactDAO(){
        //start connection inside this constructor
        if (ConnectFromProp()){
            System.out.println("Connection succeded");
            System.out.println("-----------------------------------");
        }else{
            System.out.println("Error: Connection Failed....");
            System.out.println("Please check your login cridential");
        }
    }        
        private boolean ConnectFromProp(){
            try{ 
                //1 connect
                con = connection.PropRead.getDySqlDataSource().getConnection();

                if (con != null){
                    conFlag = true;
                    return true;
               }
            }catch (SQLException ex){
                System.out.println("inside DAO"); 
                System.out.println(ex.getMessage());            
            }
            return false;
        }  
        
    
    public void disconnected(){
        try{
            if(conFlag){
                con.close();
                conFlag = false;
                System.out.println("-----------------------------------");
                System.out.println("Dissconected Successfuly.");
            }    
        }catch (SQLException ex){
            System.out.print("-----------------------------------");
            System.out.print("Error: Please connect to a DB first : ");
            System.out.println(ex.getMessage());
        }
    }
    
    private ContactPerson createPerson(ResultSet result) {
        ContactPerson tempPerson = new ContactPerson();    //temporery object.
        try {
            // go throw each col in one row
            tempPerson.setId(result.getInt(1));
            tempPerson.setName(result.getString(2));
            tempPerson.setNickName(result.getString(3));
            tempPerson.setAddress(result.getString(4));
            tempPerson.setHome_phone(result.getString(5));
            tempPerson.setWork_phone(result.getString(6));
            tempPerson.setCell_phone(result.getString(7));
            tempPerson.setEmail(result.getString(8));
            tempPerson.setBirthday(result.getDate(9));
            tempPerson.setWeb_site(result.getString(10));
            tempPerson.setProfession(result.getString(11));

            return tempPerson; //return tempory object to be stored in the list
        } catch (SQLException ex) {
            System.out.println(ex.getMessage());            
            return tempPerson;
        }
    }
    
    //getContacts()    it gets the data from the DB and transform it to list and return it to be parsed in the the main().
    public List<ContactPerson> getContacts(){  
        List <ContactPerson> list = new ArrayList<ContactPerson>();
        ContactPerson person = new ContactPerson(); //create one person to iterate over

        try{
            //if connection were established
            if (conFlag){                
                
                Statement statement = con.createStatement(); //this is to get data from the DB
                String queryString = new String("select * from contact;");
                ResultSet rs = statement.executeQuery(queryString);
                
                while(rs.next()){                    
                    person = createPerson(rs);
                    list.add(person);
                }
            }
        }catch (Exception ex) {
            
            System.out.println("Error: problem with retreving the data.");
            System.out.println(ex.getMessage());
        }
        return list;
    }
    
    
    public void addContact(String name , String nick_name , String address, String home_phone, String work_phone, String cell_phone, String email, String web_site ,String profession)  throws SQLException{
        try{
           if(conFlag){
                Statement statement = con.createStatement(); //this is to get data from the DB
                String addContact = "INSERT INTO contact (name , nick_name , address, home_phone, work_phone, cell_phone, email , web_site , profession) VALUES ('"+name+"' , '"+nick_name+"' , '"+address+"' , '"+home_phone+"', '"+work_phone+"', '"+cell_phone+"', '"+email+"' ,  '"+web_site+"', '"+profession+"') ";
                statement.executeUpdate(addContact);
           }
        }catch (Exception ex){
            System.out.println("Error: problem with adding values.");
            System.out.println(ex.getMessage());
        }
    }
    
    public void updateContact(String name , int id) throws SQLException{
        try{
           if(conFlag){
                Statement statement = con.createStatement(); //this is to get data from the DB
                String updateContact = "UPDATE contact SET name = '"+name+"' WHERE id = '"+id+"'";
                statement.executeUpdate(updateContact);
           }
        }catch (Exception ex){
            System.out.println("Error: problem with updating values.");
            System.out.println(ex.getMessage());
        }
    } 
    
    public void deleteContactById(int id) throws SQLException{
        try{
           if(conFlag){
                Statement statement = con.createStatement(); //this is to get data from the DB
                String deleteContact = "DELETE FROM contact WHERE id = '"+id+"'";
                statement.executeUpdate(deleteContact);
           }
        }catch (Exception ex){
            System.out.println("Error: problem with updating values.");
            System.out.println(ex.getMessage());
        }
    }
    
}

