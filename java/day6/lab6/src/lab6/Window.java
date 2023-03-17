/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package lab6;

import javax.swing.*;
import java.awt.*;
import java.util.Date;

/**
 *
 * @author maesl
 */

// override functions that to draw better
public class Window extends JPanel implements Runnable {
    public Window() {
        this.setBackground(Color.LIGHT_GRAY);
        new Thread(this).start();
    }

    
    @Override
    public void run() {
            while (true){
                this.repaint();
                try {
                    Thread.sleep(1000);
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }
    }

    @Override
    protected void paintComponent(Graphics g) {
        super.paintComponent(g);
        g.drawString(new Date().toString() , 100,150);
    }
}
