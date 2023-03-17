/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package lab1_A_onlyJava;

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
 * @author maesl
 */
public class JavaFXApplication1 extends Application{

    Text helloWorld;
    StackPane root;

    @Override
    public void init() throws Exception {
        super.init(); // Generated from nbfs://nbhost/SystemFileSystem/Templates/Classes/Code/OverriddenMethodBody


        
        Reflection ref = new Reflection();
        
        helloWorld = new Text ("Iam here");
        helloWorld.setId("txt");
        helloWorld.setEffect(ref);
        
        Rectangle sqre1 = new Rectangle(0, 0, 600, 600);
        sqre1.setId("sqr");
        
        
        

        root = new StackPane();

        root.getChildren().add(sqre1);
        root.getChildren().add(helloWorld);
        


    }

    @Override
    public void start(Stage primaryStage) {

        Scene scene = new Scene(root, 600, 600);
  


        scene.getStylesheets().add(getClass().getResource("style.css").toExternalForm());
        
 
        primaryStage.setTitle("Hello World!");
        primaryStage.setScene(scene);
        primaryStage.show();
        
        
                //        VBox windw = new VBox();

//        final Scene scn = new Scene(windw,200, 200);
//        scn.setFill(null);
//        Stop[] stops = new Stop[] { new Stop(0, Color.BLACK), new Stop(1, Color.WHITE), new Stop(0, Color.BLACK)};
//        
//        LinearGradient lngnt = new LinearGradient(0, 0, 1, 2, true, CycleMethod.NO_CYCLE, stops);
//        
//        Rectangle sqre1 = new Rectangle(0, 0, 200, 200);
//        sqre1.setFill(lngnt);
    }

    /**
     * @param args the command line arguments
     */
}


