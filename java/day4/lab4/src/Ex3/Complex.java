/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package Ex3;

/**
 *
 * @author maesl
 */
public interface Complex<T> {
    void setReal(T r);
    void setImagine(T m);

    T getReal();
    T getImagine();
    
    Complex<T> add( Complex<T> z);
    Complex<T> sub( Complex<T> z);
    Complex<T> multi( Complex<T> z);
    Complex<T> div( Complex<T> z);
    void printComplex();

    
}
