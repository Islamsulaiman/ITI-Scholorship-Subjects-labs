/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */


package gui;

import javaapplication16.*;
//import connection.*;

import java.util.List;
import javafx.application.Application;
//import javafx.event.ActionEvent;
//import javafx.event.EventHandler;
import javafx.geometry.HPos;
import javafx.geometry.Insets;
import javafx.geometry.Pos;
import javafx.scene.Scene;
import javafx.scene.control.*;
import javafx.scene.layout.*;
import javafx.scene.text.Font;
import javafx.scene.text.FontWeight;
import javafx.stage.Stage;
//import javafx.stage.Window;

public class JavaFXApplication extends Application {

    ContactDAO db = new ContactDAO();
    List<ContactPerson> res = db.getContacts();
    
    int contactNo = 0;
    
    @Override
    public void start(Stage primaryStage) throws Exception {
        primaryStage.setTitle("Islam's DB viewer application");

        // Create the registration form grid pane
        GridPane gridPane = createRegistrationFormPane();
        // Add UI controls to the registration form grid pane
        addUIControls(gridPane);
        // Create a scene with registration form grid pane as the root node
        Scene scene = new Scene(gridPane, 800, 500);
        // Set the scene in primary stage	
        primaryStage.setScene(scene);
        
        primaryStage.show();
    }


    private GridPane createRegistrationFormPane() {
        // Instantiate a new Grid Pane
        GridPane gridPane = new GridPane();

        // Position the pane at the center of the screen, both vertically and horizontally
        gridPane.setAlignment(Pos.CENTER);

        // Set a padding of 20px on each side
        gridPane.setPadding(new Insets(40, 40, 40, 40));

        // Set the horizontal gap between columns
        gridPane.setHgap(10);

        // Set the vertical gap between rows
        gridPane.setVgap(10);

        // Add Column Constraints

        // columnOneConstraints will be applied to all the nodes placed in column one.
        ColumnConstraints columnOneConstraints = new ColumnConstraints(100, 100, Double.MAX_VALUE);
        columnOneConstraints.setHalignment(HPos.RIGHT);

        // columnTwoConstraints will be applied to all the nodes placed in column two.
        ColumnConstraints columnTwoConstrains = new ColumnConstraints(200,200, Double.MAX_VALUE);
        columnTwoConstrains.setHgrow(Priority.ALWAYS);

        gridPane.getColumnConstraints().addAll(columnOneConstraints, columnTwoConstrains);

        return gridPane;
    }

    private void addUIControls(GridPane gridPane) {
        // Add Header
        Label headerLabel = new Label("Contact View");
        headerLabel.setFont(Font.font("Arial", FontWeight.BOLD, 24));
        gridPane.add(headerLabel, 0,0,2,1);
        GridPane.setHalignment(headerLabel, HPos.CENTER);
        GridPane.setMargin(headerLabel, new Insets(20, 0,20,0));

        // Add Name Label
        Label nameLabel = new Label("Full Name : ");
        gridPane.add(nameLabel, 0,1);

        // Add Name Text Field
        TextField nameField = new TextField();
        nameField.setPrefHeight(40);
        gridPane.add(nameField, 1,1);


        // Add Email Label
        Label emailLabel = new Label("Email ID : ");
        gridPane.add(emailLabel, 0, 2);

        // Add Email Text Field
        TextField emailField = new TextField();
        emailField.setPrefHeight(40);
        gridPane.add(emailField, 1, 2);
        
        
        // Add cell phone Label
        Label cellPhoneLabel = new Label("Cell Phone : ");
        gridPane.add(cellPhoneLabel, 0, 3);

        // Add Email Text Field
        TextField cellPhoneFeild = new TextField();
        cellPhoneFeild.setPrefHeight(40);
        gridPane.add(cellPhoneFeild, 1, 3);


        // Add First Button
        Button firstButton = new Button("First");
        firstButton.setPrefHeight(40);
        firstButton.setDefaultButton(true);
        firstButton.setPrefWidth(70);
        gridPane.add(firstButton, 0, 4, 2, 1);
        GridPane.setHalignment(firstButton, HPos.CENTER);
        GridPane.setMargin(firstButton, new Insets(20, 0,20,0));
        
        // Add previous Button
        Button previousButton = new Button("Previous");
        previousButton.setPrefHeight(40);
        previousButton.setPrefWidth(70);
        gridPane.add(previousButton, 2, 4, 2, 1);
        GridPane.setHalignment(previousButton, HPos.CENTER);
        GridPane.setMargin(previousButton, new Insets(20, 0,20,0));
        
        
        // Add next Button
        Button nextButton = new Button("Next");
        nextButton.setPrefHeight(40);
        nextButton.setPrefWidth(70);
        gridPane.add(nextButton, 4, 4, 2, 1);
        GridPane.setHalignment(nextButton, HPos.RIGHT);
        GridPane.setMargin(nextButton, new Insets(20, 0,20,0));
        
        
        // Add last Button
        Button lastButton = new Button("Last");
        lastButton.setPrefHeight(40);
        lastButton.setPrefWidth(70);
        gridPane.add(lastButton, 6, 4, 2, 1);
        GridPane.setHalignment(lastButton, HPos.CENTER);
        GridPane.setMargin(lastButton, new Insets(20, 0,20,0));
        
        
        firstButton.setOnAction(e -> {
            contactNo = 0;
            nameField.setText(res.get(contactNo).getName());
            emailField.setText(res.get(contactNo).getEmail());
            cellPhoneFeild.setText(res.get(contactNo).getCell_phone());

        });
        
        previousButton.setOnAction(e -> {
            contactNo = (contactNo-1) < 0 ? res.size() - 1 : (contactNo-1);
            nameField.setText(res.get(contactNo).getName());
            emailField.setText(res.get(contactNo).getEmail());
            cellPhoneFeild.setText(res.get(contactNo).getCell_phone());

        });
        
        nextButton.setOnAction(e -> {
            contactNo = (contactNo + 1) > res.size() - 1 ? 0 : (contactNo+1);
            nameField.setText(res.get(contactNo).getName());
            emailField.setText(res.get(contactNo).getEmail());
            cellPhoneFeild.setText(res.get(contactNo).getCell_phone());

        });
        
        lastButton.setOnAction(e -> {
            contactNo = res.size() - 1;
            nameField.setText(res.get(contactNo).getName());
            emailField.setText(res.get(contactNo).getEmail());
            cellPhoneFeild.setText(res.get(contactNo).getCell_phone());

        });
        
    }
}

