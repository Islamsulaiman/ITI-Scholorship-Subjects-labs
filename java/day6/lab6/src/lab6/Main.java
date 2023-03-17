/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package lab6;

import javax.swing.*;


/**
 *
 * @author maesl
 */
public class Main {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        // TODO code application logic here
        JFrame frame = new JFrame();

        Window panel = new Window();
        TimeString marquee = new TimeString("This is multi thriding");
        MovingBall ball = new MovingBall();

        // //this to run the clock
        frame.setContentPane(panel);
        
        // //this to run the 
//        frame.setContentPane(marquee);

        // // this to run the moving ball
//        frame.setContentPane(ball);


        frame.setTitle("This is me");
        frame.setSize(500,500);
        frame.setVisible(true);
    }
}