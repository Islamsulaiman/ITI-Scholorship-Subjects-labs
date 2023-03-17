/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package Ex3;

/**
 *
 * @author maesl
 */
public class DoubleComplex implements Complex<Double> {

    private double real, img;

    @Override
    public void setReal(Double r) {
        real = r;
    }

    @Override
    public void setImagine(Double m) {
        img = m;
    }

    @Override
    public Double getReal() {
        return real;
    }

    @Override
    public Double getImagine() {
        return img;
    }

    @Override
    public Complex<Double> add(Complex<Double> z) {
        Complex<Double> obj = new DoubleComplex();
        obj.setReal(real + z.getReal());
        obj.setImagine(img + z.getImagine());

        return obj;

    }

    @Override
    public Complex<Double> sub(Complex<Double> z) {
        Complex<Double> obj = new DoubleComplex();
        obj.setReal(real - z.getReal());
        obj.setImagine(img - z.getImagine());

        return obj;
    }

    @Override
    public Complex<Double> multi(Complex<Double> z) {
        Complex<Double> obj = new DoubleComplex();
        obj.setReal(real * z.getReal());
        obj.setImagine(img * z.getImagine());

        return obj;
    }

    @Override
    public Complex<Double> div(Complex<Double> z) {
        Complex<Double> obj = new DoubleComplex();
            obj.setReal(real / z.getReal());

            obj.setImagine(img / z.getImagine());

        return obj;
    }

    @Override
    public void printComplex() {
        
        System.out.println("the Real num is : " + real );
        System.out.println("the Real num is : " + img );

    }

}