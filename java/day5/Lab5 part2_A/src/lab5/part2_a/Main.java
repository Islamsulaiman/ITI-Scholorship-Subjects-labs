import java.io.*;
import java.util.Comparator;
import java.util.List;
import java.util.Map;
import java.util.Optional;

package lab5.part2_a;


public class lab5.part2_a {
    public static void main(String[] args) throws IOException{
        
            List<Country> countryList = ReadFromCSVFiles.readCountriesFromFile("C:\\Users\\Dell\\Desktop\\java iti\\lab 5\\Lab 5 B\\Lab5_doc\\Countries.csv");
            List<City> cityList = ReadFromCSVFiles.readCitiesFromFile("C:\\Users\\Dell\\Desktop\\java iti\\lab 5\\Lab 5 B\\Lab5_doc\\Cities.csv");
            Optional<City> cityEachCountry;
            
            for(Country country : countryList){
                cityEachCountry = cityList.stream().filter(city -> city.getCountryCode().trim().equals(country.getCode())).max(Comparator.comparingInt(City::getPopulation));
                cityEachCountry.ifPresent(System.out::println);
            }
    }

}