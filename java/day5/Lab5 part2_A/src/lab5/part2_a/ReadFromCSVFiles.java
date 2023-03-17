import java.io.*;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

public class ReadFromCSVFiles {

    public static List<Country> readCountriesFromFile(String url){

        List<Country> countries = new ArrayList<>();
        File file = new File(url);
        BufferedReader bufferedReader = null;
        try{
            bufferedReader = new BufferedReader(new FileReader(file));
            String line = bufferedReader.readLine();
            while(line != null){
                String [] Data = line.split(",");
                countries.add(new Country(Data[0],Data[1],Data[2],Double.parseDouble(Data[3]),(int) Double.parseDouble(Data[4]),Double.parseDouble(Data[5]),Integer.parseInt(Data[6])));
                line = bufferedReader.readLine();
            }
        } catch (IOException e) {
            e.printStackTrace();
        }

        return countries;
    }

    public  static List<City> readCitiesFromFile(String url){

        List<City> cities = new ArrayList<>();
        File file = new File(url);
        BufferedReader bufferedReader = null;
        try{
            bufferedReader = new BufferedReader(new FileReader(file));
            String line = bufferedReader.readLine();
            while(line != null){
                String [] Data = line.split(",");
                cities.add(new City(Integer.parseInt(Data[0]) , Data[1] , Integer.parseInt(Data[2]) , Data[3]));
                line = bufferedReader.readLine();
            }
        } catch (IOException e) {
            e.printStackTrace();
        }

        return cities;
    }
}
