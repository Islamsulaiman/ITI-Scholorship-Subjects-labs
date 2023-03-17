/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package Ex1;

import java.util.Scanner;
/**
 *
 * @author maesl
 */
public class Main {
    public static void main(String [] args){
        int a,b;
        Scanner input = new Scanner(System.in);
        
        System.out.println("Enter 1st num");
        a = input.nextInt();
        
        System.out.println("Enter 2nd num");
        b = input.nextInt();
        
        Addition add1 = new Addition(a,b);
        try{
            System.out.println(add1.addNumbers());
            
        }catch (NigativeAddException ex){
            System.out.println(ex.getMessage());
            
        }finally{
            System.out.println("Reload to iterate again");
        }
        
        
    }
}
