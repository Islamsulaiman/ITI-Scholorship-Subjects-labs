/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package lab5.part1;

import java.util.Scanner;

/**
 *
 * @author maesl
 */
public class Lab5Part1 {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        
        // TODO code application logic here

        String str1, str2;
        Scanner input = new Scanner(System.in);

        System.out.println("Enter 1st String");
        str1 = input.nextLine();
        
        System.out.println("Enter 1st String");
        str2 = input.nextLine();


        String longestStr = StringAlter.sgtringFunction(str1, str2, (s1, s2) -> s1.length() > s2.length());
        System.out.println("The Longest String is " + longestStr);

        String firstStr = StringAlter.sgtringFunction(str1, str2, (s1, s2) -> true);
        System.out.println("The First String is " + firstStr);
            
            
    }
}