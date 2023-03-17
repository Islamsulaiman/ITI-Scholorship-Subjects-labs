/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package Ex3;

/**
 *
 * @author maesl
 */
import java.util.logging.Level;
import java.util.logging.Logger;

public class Main {

    public static void main(String[] args) {
        DoubleComplex c1 = new DoubleComplex();
        c1.setReal(4.5);
        c1.setImagine(7.5);

        DoubleComplex c2 = new DoubleComplex();
        c2.setReal(5.5);
        c2.setImagine(0.0);
        System.out.println("+++++++++++++++++++++++++++++++++++++++++++");

        System.out.println("the Add of two Complex is :");
        (c1.add(c2)).printComplex();
        System.out.println("+++++++++++++++++++++++++++++++++++++++++++");

        System.out.println("the sub of two Complex is :");
        (c1.sub(c2)).printComplex();
        System.out.println("+++++++++++++++++++++++++++++++++++++++++++");
        
        System.out.println("the multi of two Complex is :");
        (c1.multi(c2)).printComplex();
        System.out.println("+++++++++++++++++++++++++++++++++++++++++++");
        
        System.out.println("the div of two Complex is :");
        
        (c1.div(c2)).printComplex();

  

    }

}
