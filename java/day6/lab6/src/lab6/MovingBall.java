/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package lab6;

import javax.swing.*;
import java.awt.*;

/**
 *
 * @author maesl
 */


public class MovingBall extends JPanel implements Runnable {

    private int dimX;
    private int dimY;
    private int diameter;
    private int dx ;
    private int dy ;

    public MovingBall(){
        this.setBackground(Color.LIGHT_GRAY);
        this.dimX=0;
        this.dimY =0;
        
        this.dx = 15;
        this.dy = 15;
        
        this.diameter = 45;

        new Thread(this).start();
    }

    @Override
    protected void paintComponent(Graphics g) {
        super.paintComponent(g);
        g.setColor(Color.RED);
        g.fillOval(dimX,dimY,diameter,diameter);
    }

    @Override
    public void run() {
        //this while to keep looping and drawing
        while(true){
            this.repaint();
            dimX = dimX + dx;
            dimY = dimY + dy;
            if(dimX < 0){
                dimX = 0;
                dx = -dx;
            }
            if(dimY < 0){
                dimY = 0;
                dy = -dy;
            }
            if(dimY + diameter >= this.getHeight()){
                dimY = this.getHeight() - diameter;
                dy = -dy;
            }
            if(dimX + diameter >= this.getWidth()){
                dimX = this.getWidth() - diameter;
                dx= -dx;
            }
            try{
                Thread.sleep(25);
            }
            catch (InterruptedException e){
                e.printStackTrace();
            }
        }
    }
}