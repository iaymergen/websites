import java.util.Scanner;

public class askolcer {
    public static void main(String[] args) {

        Scanner scan = new Scanner(System.in);

        System.out.println("Plase enter your name here.");
        String nameOne = scan.nextLine();
        System.out.println("Please enter the other name here.");
        String nameTwo = scan.nextLine();

        String name = nameOne.concat(nameTwo);

        String son = calculate(name);
        System.out.println(son);

    }

    public static String translate(String name) {
        String r = "";
        String ret = "";
        do{
            char first = name.charAt(0);
            int c = 1;
            for (int i = 1; i < name.length(); i++) {

                if (first == name.charAt(i)) {
                    c++;
                    name = name.substring(0, i) + name.substring(i + 1);
                    i--;
                }

            }
            name = name.substring(1);
            r = Integer.toString(c);
            ret = ret + r;
        }while(name.length() > 0);
        return ret;
    }

    public static String calculate(String name)
    {
        String numbers = translate(name);
        String newString = "";
        String oldString = numbers;
        String oldStringLenght = numbers;
        do{
           
            for(int i = 0; i < oldStringLenght.length() / 2; i++)
            {
               
                int first = firstDigit(oldString);
                int last = lastDigit(oldString);
                int sum = first + last;
                oldString = oldString.substring(1, oldString.length() -1);
                newString = newString + Integer.toString(sum);
            }
            if(oldString.length() <= 1)
            {
                newString = newString + oldString;
                oldString = newString;
                oldStringLenght = newString;
                newString = "";
            }
           

        }while(oldString.length() >= 3);
        return oldString;
    }

    public static int firstDigit(String s)
    {
        String first = s.substring(s.length() -1);
        int i = Integer.valueOf(first);
        return i;
    }

    public static int lastDigit(String s)
    {
        String last = s.substring(0,1);
        int i = Integer.valueOf(last);
        return i;
    }
    
}
