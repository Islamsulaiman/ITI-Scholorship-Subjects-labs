/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package RowSet;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;

import java.sql.SQLException;

import javax.sql.rowset.JdbcRowSet;
import javax.sql.rowset.RowSetFactory;
import javax.sql.rowset.RowSetProvider;
/**
 *
 * @author maesl
 */
public class WebRowSet {
        public static void main(String [] args) throws SQLException{
            
            Properties props = new Properties();
            FileInputStream fis = null;
            
            try{
    //            DriverManager.registerDriver(new com.mysql.cj.jbdc.Driver());
                fis = new FileInputStream("D:\\ITI Subjects\\java DB\\day2\\lab2\\JavaApplication16\\src\\connection\\DBRopFile.properties");
                props.load(fis);


//                RowSetFactory rowSetFactory = RowSetProvider.newFactory();
//                WebRowSet jdbcRowSet = rowSetFactory.createJdbcRowSet();
                javax.sql.rowset.WebRowSet jdbcRowSet = RowSetProvider.newFactory().createWebRowSet();

                jdbcRowSet.setUrl(props.getProperty("MYSQL_DB_URL"));
                jdbcRowSet.setUsername(props.getProperty("USER"));
                jdbcRowSet.setPassword(props.getProperty("PASS"));

                jdbcRowSet.setCommand("SELECT * FROM contact;");
                jdbcRowSet.execute();


                while(jdbcRowSet.next()){
                    System.out.println("Name "+ jdbcRowSet.getString("name"));
                }
                
                //write to xml
                java.io.FileOutputStream OutStream = new java.io.FileOutputStream("D:\\contacts.xml") ;
                jdbcRowSet.writeXml(OutStream);
                
        } catch (FileNotFoundException ex) {
            System.out.println(ex);
        } catch (IOException ex){
            System.out.println(ex);
        }
        
    }
}
