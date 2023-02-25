public class Ex1 {
    public static void main(String[] args) {

        String commandLine = "165.121.17.24";
        IPCutter cut = new IPCutter(commandLine);
        int [] result = cut.splitString();

        for(int i =0; i< result.length ; i++){
            System.out.println(result[i]);
        }

    }
}