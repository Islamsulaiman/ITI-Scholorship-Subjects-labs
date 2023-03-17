/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package Ex1;

/**
 *
 * @author maesl
 */
public class Addition {
    private int a, b;
    
    public Addition(int a, int b){
        this.a= a;
        this.b=b;
    }
    public int addNumbers () throws NigativeAddException{
        int total = this.a + this.b;
        if(total < 0){
            throw new NigativeAddException();
        }else{
            return total;
        }
        
    }
}
