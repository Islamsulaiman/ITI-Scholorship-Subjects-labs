import java.util.StringTokenizer;

public class IPCutter {
    String cmdLine;

    public IPCutter(String cmdLine) {
        this.cmdLine = cmdLine;
    }


    public int[] tokenIP(){
        int[] result = new int[4];
        StringTokenizer st = new StringTokenizer(this.cmdLine,".");
        for (int i = 0; st.hasMoreTokens(); i++) {
            result[i] = Integer.parseInt((st.nextToken()));
        }
        return result;
    }

    public int[] splitString() {
        int[] result = new int[4];
        String [] cuttedIp = this.cmdLine.split("\\.");
            for(int i=0; i<cuttedIp.length; i++) {
                result[i] = Integer.parseInt(cuttedIp[i]);
            }

        return result;
    }


}
