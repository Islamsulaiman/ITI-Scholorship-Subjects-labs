/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package classes;

import javafx.application.Application;
import javafx.scene.Scene;
import javafx.scene.control.*;
import javafx.scene.layout.*;
import javafx.stage.Stage;
import javafx.scene.layout.*;
import javafx.scene.paint.*;
import javafx.scene.text.*;
import javafx.geometry.*;
import javafx.scene.effect.Reflection;
import javafx.scene.layout.*;
import javafx.scene.shape.*;
import javafx.scene.paint.*;

/**
 *
 * @author hazemsobiha
 */
public class FxClass extends Application {
  public Text t;
  public  StackPane root;
 
    @Override
    public void init() throws Exception{
        super.init();
        t = new Text("Hello World");
        Reflection r = new Reflection();
        r.setFraction(0.7f);
        t.setEffect(r);
        t.setId("t");

        Stop[] stops = new Stop[]{new Stop(0, Color.BLACK), new Stop(1, Color.WHITE), new Stop(0, Color.BLACK)};
        LinearGradient lg1 = new LinearGradient(0, 0, 1, 0, true, CycleMethod.NO_CYCLE, stops);
        Rectangle rect = new Rectangle(0, 0, 300, 250);
        rect.setId("rect");
        rect.setFill(lg1);

        root = new StackPane();
        root.getChildren().add(rect);
        root.getChildren().add(t);
    }
    @Override
    public void start(Stage primaryStage) {
        

        Scene scene = new Scene(root, 300, 250);
        scene.getStylesheets().add(getClass().getResource("style.css").toString());
        
        primaryStage.setScene(scene);
        primaryStage.show();

    }
}
