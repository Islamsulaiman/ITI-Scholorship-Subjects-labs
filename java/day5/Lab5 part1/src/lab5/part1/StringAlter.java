/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package lab5.part1;
import java.util.function.BiPredicate;

/**
 *
 * @author maesl
 */
public class StringAlter {
    
    public static String sgtringFunction(String str1, String str2, BiPredicate<String, String> biPredicate) {
        if (biPredicate.test(str1, str2)) {
            return str1;
        } else {
            return str2;
        }
    }
}
