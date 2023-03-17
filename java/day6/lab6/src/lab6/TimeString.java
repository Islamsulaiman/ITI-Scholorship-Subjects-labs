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


public class TimeString extends JPanel implements Runnable {

    private String text;
    private int dimX;
    private int dimY;

    public TimeString(String text) {
        
        this.text = text;
        this.setBackground(Color.LIGHT_GRAY);
        this.dimX = 15;
        this.dimY = 180;
        new Thread(this).start();
    }
    
    @Override
    public void run() {
        
            while(true){
                this.repaint();
                dimX = dimX + 20;
                if(dimX > this.getWidth()){
                    //to start over if we exceede the max width
                    dimX = 0;
                }
                try{
                    Thread.sleep(100);
                }catch (InterruptedException e){
                    e.printStackTrace();
                }
            }
    }

    
    
    
    
    
    
    @Override
    protected void paintComponent(Graphics graph) {
        super.paintComponent(graph);
        graph.drawString(text,dimX,dimY);
    }


}
