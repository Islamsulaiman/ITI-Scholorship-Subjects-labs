/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package Ex2;

import java.util.ArrayList;

/**
 *
 * @author maesl
 */
public class Test {
    
    
    public void func_Rect(ArrayList<Rectangle> rect){
        int count = 1;
        
       for (Rectangle i : rect){
           System.out.println( i.draw() + " From Rectangle no "+ count);
       }
       count++; 
    }
    
    public void func_circle(ArrayList<Circle> cir){
        int count = 1;
        
        for (Circle i : cir){
           System.out.println( i.draw() + " From Circle no "+ count);
       }
       count++; 
        
    }
    
    
    
    
    
    
}
