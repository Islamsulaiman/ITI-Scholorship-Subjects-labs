/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package connection;

import com.mysql.cj.jdbc.MysqlDataSource;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;

/**
 *
 * @author maesl
 */
public class PropRead {
    
    public static MysqlDataSource getDySqlDataSource() {
    
        Properties props = new Properties();
        FileInputStream fis = null;
        MysqlDataSource mysqlDS = new MysqlDataSource();
        
        try{
            fis = new FileInputStream("D:\\ITI Subjects\\java DB\\day2\\lab2\\JavaApplication16\\src\\connection\\DBRopFile.properties");
            props.load(fis);
            mysqlDS.setURL(props.getProperty("MYSQL_DB_URL"));
            mysqlDS.setUser(props.getProperty("USER"));
            mysqlDS.setPassword(props.getProperty("PASS"));
            
        } catch (FileNotFoundException ex) {
            System.out.println(ex);
        } catch (IOException ex){
            System.out.println(ex);
        }
        
        return mysqlDS;
    
    }
}
