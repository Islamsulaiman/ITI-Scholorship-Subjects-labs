/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package Ex2;

import java.util.ArrayList;
import java.util.Scanner;

/**
 *
 * @author maesl
 */
public class Main {
    
    
    
    public static void main(String [] args){
        int x ,y;
        
        Scanner input = new Scanner(System.in);
        
        ArrayList<Rectangle> arrRect = new ArrayList<Rectangle>();
        ArrayList<Circle> arrCirc = new ArrayList<Circle>();
        
        //for loop to create rect arrayList
        for(int i =0; i<2; i++){
            System.out.println("Please enter reactangle no "+(i+1)+ " height");
            x = input.nextInt();
            
            System.out.println("Please enter reactangle no "+(i+1)+ " width");
            y = input.nextInt();
            
            arrRect.add(new Rectangle(x,y));
            System.out.println("--------------------------");
            
        }
        
        //for loop to create Circle arrayList
        for(int i =0; i<2; i++){
            System.out.println("Please enter circle no "+(i+1)+ " radice");
            x = input.nextInt();
            
            arrCirc.add(new Circle(x));
            System.out.println("--------------------------");
            
        }
        
        Test obj1 = new Test();
        
        obj1.func_Rect(arrRect);
        System.out.println("------------------------");
        obj1.func_circle(arrCirc);
        
        
        
        
        
    }
}
