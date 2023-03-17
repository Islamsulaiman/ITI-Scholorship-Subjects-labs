/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package Ex2;

/**
 *
 * @author maesl
 */
public class Circle extends Shape {
    int rad;
    
    public Circle(int x){
        this.rad = x;
    }
    
    @Override
    public String draw(){
//        System.out.println("Draw circle with raduice = "+ this.rad);
        String value = "Draw circle with raduice = "+ this.rad;
        return value;
    }
}
