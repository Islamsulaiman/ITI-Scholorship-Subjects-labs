/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package Ex2;

/**
 *
 * @author maesl
 */
public class Rectangle extends Shape {
    int h,w;
    
    public Rectangle(int x, int y){
        this.h=x;
        this.w=y;
    }
    
    @Override
    public String draw(){
//        System.out.println("Draw Rectangle with Height = "+ this.h+ "and width = " + this.w);
        String value = "Draw Rectangle with Height =  "+ this.h+ " and width =  " + this.w;
        return value;
    }
}
