public class Ex3{

    public static void main(String args[]){

        if (args.length != 2) {
            System.out.println("Please enter two args");
            return;
        }

        int num;
        try {

            num = Integer.parseInt(args[0]);

        } catch (NumberFormatException e) {
            System.out.println("error you need to inter number as a second arg ");
            return;
        }

        String str = args[1];

        for (int i = 0; i < num; i++) {
            System.out.println(str);
        }

    }
}