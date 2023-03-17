/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package javaapplication16;

import java.util.Date; 

/**
 *
 * @author Islam Sulaiman
 */
public class ContactPerson {
    
    @Override
    public String toString(){
        return super.toString();
    }
    
    //all private to get them by setters latter
    private int id;
    private String name;
    private String nickName;
    private String address;
    private String home_phone;
    private String work_phone;
    private String cell_phone;
    private String email;
    private Date birthday;
    private String web_site;
    private String profession;
    
    public ContactPerson (){
//        System.out.println("Constructing empty person to add data into");
    }
    
    public ContactPerson(int id, String name, String nick_name, String address, String home_phone, String work_phone, String cell_phone, String email, String web_site, String profession){
        this.id = id;
        this.name = name;
        this.nickName = nick_name;
        this.address = address;
        this.home_phone = home_phone;
        this.work_phone = work_phone;
        this.cell_phone = cell_phone;
        this.email = email;
//        this.birthday = brithday;
        this.web_site = web_site;
        this.profession = profession;
        
        
    }

    //setters
    public void setId(int id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setNickName(String nickName) {
        this.nickName = nickName;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public void setHome_phone(String home_phone) {
        this.home_phone = home_phone;
    }

    public void setWork_phone(String work_phone) {
        this.work_phone = work_phone;
    }

    public void setCell_phone(String cell_phone) {
        this.cell_phone = cell_phone;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setBirthday(Date birthday) {
        this.birthday = birthday;
    }

    public void setWeb_site(String web_site) {
        this.web_site = web_site;
    }

    public void setProfession(String profession) {
        this.profession = profession;
    }
    
    
    //getters
    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getNickName() {
        return nickName;
    }

    public String getAddress() {
        return address;
    }

    public String getHome_phone() {
        return home_phone;
    }

    public String getWork_phone() {
        return work_phone;
    }

    public String getCell_phone() {
        return cell_phone;
    }

    public String getEmail() {
        return email;
    }

    public Date getBirthday() {
        return birthday;
    }

    public String getWeb_site() {
        return web_site;
    }

    public String getProfession() {
        return profession;
    }
    
    
    
}
