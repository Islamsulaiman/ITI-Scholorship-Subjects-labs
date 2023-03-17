package com.example.notepad;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.io.FileWriter;
import java.util.Arrays;
import java.util.Objects;

import javafx.application.Application;
import javafx.collections.FXCollections;
import javafx.geometry.Insets;
import javafx.scene.Cursor;
import javafx.scene.Scene;
import javafx.scene.layout.*;
import javafx.event.ActionEvent;
import javafx.event.EventHandler;
import javafx.scene.control.*;
import javafx.scene.control.Alert.AlertType;
import javafx.scene.paint.Paint;
import javafx.stage.FileChooser;
import javafx.stage.Stage;
import javafx.stage.FileChooser.ExtensionFilter;
import javafx.scene.image.Image;
import javafx.scene.input.KeyCombination;

public class Notepad extends Application {
    TextArea textArea;
    File currentFile = null;
    Boolean isSaved = true;

    SeparatorMenuItem separator = new SeparatorMenuItem();
    SeparatorMenuItem separator1 = new SeparatorMenuItem();
    SeparatorMenuItem separator2 = new SeparatorMenuItem();
    SeparatorMenuItem separator3 = new SeparatorMenuItem();
    SeparatorMenuItem separator4 = new SeparatorMenuItem();
    SeparatorMenuItem separator5 = new SeparatorMenuItem();




    public void start(Stage s) {

        setTitle(s);
//        s.getIcons().add(new Image("resources/notepad.png"));

        VBox vbox = new VBox(createMenu(s));
        textArea = new TextArea();

        textArea.setPrefRowCount(35);
        textArea.setPrefColumnCount(50);
        textArea.textProperty().addListener((observer, oldValue, newValue) -> {
            isSaved = false;
            setTitle(s);
        });
        s.setOnCloseRequest( event -> {
            if(!isSaved){
                Alert alert = new Alert(AlertType.CONFIRMATION, "Do you want to save changes before exit?", ButtonType.YES, ButtonType.NO,ButtonType.CANCEL);
                alert.showAndWait();
                if (alert.getResult() == ButtonType.YES) {
                    saveToFile(s);
                }else if (alert.getResult() == ButtonType.CANCEL){
                    event.consume();
                }
            }
        } );


        vbox.getChildren().add(textArea);
        Scene sc = new Scene(vbox);

        s.setScene(sc);

        s.show();
    }

    public void setTitle(Stage s) {
        String title;
        if (currentFile == null)
            title = (!isSaved ? "*" : "") + "Untitled - Moustafa Mahmoud:Notepad";
        else
            title = (!isSaved ? "*" : "") + currentFile.getName() + "- Notepad";
        s.setTitle(title);
    }

    public MenuBar createMenu(Stage stage) {
        Menu file = new Menu("File");
        MenuItem fileNew = new MenuItem("New");
        fileNew.setStyle("-fx-font:normal bold 12px 'serif'");
        fileNew.setAccelerator(KeyCombination.keyCombination("Ctrl+n"));
        fileNew.addEventHandler(ActionEvent.ACTION, new EventHandler<ActionEvent>() {
            public void handle(ActionEvent e) {
                if (textArea.getText().trim().isEmpty()) {
                    textArea.clear();
                } else {
                    Alert alert = new Alert(AlertType.CONFIRMATION, "Do you want to save?", ButtonType.YES,
                            ButtonType.NO, ButtonType.CANCEL);
                    alert.showAndWait();
                    if (alert.getResult() == ButtonType.NO) {
                        textArea.setText("");
                    } else if (alert.getResult() == ButtonType.YES) {
                        saveToFile(stage);
                    }
                }
            }
        });
        MenuItem fileNewWindow = new MenuItem("new Window");
        fileNewWindow.setAccelerator(KeyCombination.keyCombination("Ctrl + Shift + n"));
        MenuItem fileOpen = new MenuItem("Open");
        fileOpen.setAccelerator(KeyCombination.keyCombination("Ctrl+o"));
        fileOpen.addEventHandler(ActionEvent.ACTION, new EventHandler<ActionEvent>() {
            public void handle(ActionEvent e) {
                if (textArea.getText().trim().isEmpty() || isSaved) {
                    loadFileContent(stage);
                } else {
                    Alert alert = new Alert(AlertType.CONFIRMATION, "Do you want to save before opening new file?",
                            ButtonType.YES, ButtonType.NO, ButtonType.CANCEL);
                    alert.showAndWait();
                    if (alert.getResult() == ButtonType.NO) {
                        loadFileContent(stage);
                    } else if (alert.getResult() == ButtonType.YES) {
                        saveToFile(stage);
                    }
                }
            }
        });
        MenuItem fileSave = new MenuItem("Save");
        fileSave.setAccelerator(KeyCombination.keyCombination("Ctrl+s"));
        fileSave.addEventHandler(ActionEvent.ACTION, (e)->{
            if(isSaved) return;
            saveToFile(stage);
        });
        MenuItem fileSaveAs = new MenuItem("Save As");
        fileSaveAs.setAccelerator(KeyCombination.keyCombination("Ctrl+Shift+s"));
        fileSaveAs.addEventHandler(ActionEvent.ACTION,(e)->{
            if(!isSaved)
            saveToFile(stage);
        });

        MenuItem filePrint = new MenuItem("Print");
        filePrint.setAccelerator(KeyCombination.keyCombination("Ctrl+p"));

        MenuItem fileExit = new MenuItem("Exit");
        fileExit.setStyle("-fx-font:normal bold 12px 'serif'");
        file.getItems().addAll(fileNew, fileNewWindow,fileOpen, fileSave,fileSaveAs,filePrint,fileExit);
        file.getItems().add(1,separator2);
        file.getItems().add(6,separator3);
        file.getItems().add(8,separator4);



        Menu edit = new Menu("Edit");


        MenuItem Undo = new MenuItem("Undo");
        Undo.setAccelerator(KeyCombination.keyCombination("Ctrl+z"));
        Undo.addEventHandler(ActionEvent.ACTION , (e)-> textArea.undo());

        MenuItem editCut = new MenuItem("Cut");
        editCut.setAccelerator(KeyCombination.keyCombination("Ctrl+x"));
        editCut.addEventHandler(ActionEvent.ACTION, (e) -> textArea.cut());

        MenuItem editCopy = new MenuItem("Copy");
        editCopy.setAccelerator(KeyCombination.keyCombination("Ctrl+c"));
        editCopy.addEventHandler(ActionEvent.ACTION, (e) -> textArea.copy());

        MenuItem editPaste = new MenuItem("Paste");
        editPaste.setAccelerator(KeyCombination.keyCombination("Ctrl+v"));
        editPaste.addEventHandler(ActionEvent.ACTION, (e) -> textArea.paste());

        MenuItem editDelete = new MenuItem("Delete");
        editDelete.setAccelerator(KeyCombination.keyCombination("Ctrl+d"));
        editDelete.addEventHandler(ActionEvent.ACTION, (e) -> textArea.deleteText(textArea.getSelection()));

        MenuItem editSelectAll = new MenuItem("Select All");
        editSelectAll.setAccelerator(KeyCombination.keyCombination("Ctrl+a"));
        editSelectAll.addEventHandler(ActionEvent.ACTION, (e) -> textArea.selectAll());

        MenuItem editFine = new MenuItem("Find");
        editFine.setAccelerator(KeyCombination.keyCombination("Ctrl + f"));
        MenuItem editGoTo = new MenuItem("Go To");
        editGoTo.setAccelerator(KeyCombination.keyCombination("Ctrl+g"));
        edit.getItems().addAll(Undo,editCut, editCopy, editPaste, editDelete, editSelectAll , editFine , editGoTo);

        edit.getItems().add(1,separator1);
        edit.getItems().add(6,separator);
        edit.getItems().add(8,separator5);


        Menu view = new Menu("View");
        MenuItem viewZoomIn = new MenuItem("Zoom In");
        MenuItem viewZoomOut = new MenuItem("Zoom Out");
        MenuItem viewZoomDefault = new MenuItem("Zoom Restore Default");
        viewZoomIn.setAccelerator(KeyCombination.keyCombination("Ctrl plus"));
        viewZoomOut.setAccelerator(KeyCombination.keyCombination("Ctrl  minus"));
        viewZoomDefault.setAccelerator(KeyCombination.keyCombination("Ctrl + o"));




        CheckMenuItem viewStatusBar = new CheckMenuItem("Status Bar");
        view.getItems().addAll(viewZoomIn,viewZoomOut,viewZoomDefault,viewStatusBar);

        Menu help = new Menu("Help");
        MenuItem helpAbout = new MenuItem("About Notepad");
        helpAbout.addEventHandler(ActionEvent.ACTION, new EventHandler<ActionEvent>() {
            public void handle(ActionEvent e) {
                Alert alert = new Alert(AlertType.INFORMATION);
                alert.setTitle("About Notepad");
                alert.setHeaderText("Notepad");
                String s ="Author: Moustafa Mahmoud OS NewCapital © ";
                alert.setContentText(s);
                alert.show();
            }
        });
        help.getItems().add(helpAbout);

        MenuBar menubar = new MenuBar();
        menubar.getMenus().addAll(file, edit,view, help);
        menubar.setStyle("-fx-background-color:#24B6C3 ;");
        menubar.setBorder(Border.stroke(Paint.valueOf("blue")));
        menubar.setPadding(new Insets(5,5,5,5));
        menubar.setCursor(Cursor.HAND);
        return menubar;
    }

    public void saveToFile(Stage stage) {
        if (currentFile == null) {
            FileChooser fileChooser = new FileChooser();
            fileChooser.setTitle("Save Text File");
            fileChooser.getExtensionFilters().add(new ExtensionFilter("Text Files", "*.txt"));
            File file = fileChooser.showSaveDialog(stage);
            if (file != null) {
                currentFile = file;
            }
        }
        if (!isSaved) {
            try (FileWriter fileWriter = new FileWriter(currentFile, false)) {
                fileWriter.write(textArea.getText());
                isSaved = true;
                setTitle(stage);
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
    }

    public void loadFileContent(Stage stage) {
        FileChooser fileChooser = new FileChooser();
        fileChooser.setTitle("Open Text File");
        fileChooser.getExtensionFilters().add(new ExtensionFilter("Text Files", "*.txt"));
        File selectedFile = fileChooser.showOpenDialog(stage);
        if (selectedFile != null) {
            currentFile = selectedFile;
            setTitle(stage);
            try (BufferedReader reader = new BufferedReader(new FileReader(selectedFile))) {
                String currentLine, content = "";
                while ((currentLine = reader.readLine()) != null) {
                    content += currentLine + "\n";
                }
                textArea.setText(content);
            } catch (Exception e) {
                e.printStackTrace();
            }
            currentFile = selectedFile;
            isSaved = true;
            setTitle(stage);
        }
    }
    public static void main(String args[]) {
        launch(args);
    }
}