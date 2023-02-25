
public class CountWords {

    void countWords(String line , String value){


        String values[] = line.split(" ");

        int count = 0;
        for (int i = 0; i < values.length; i++) {
            if (value.equals(values[i]))
                count++;
        }

        System.out.println(value  + " happens " + count + " times");

    }
}
