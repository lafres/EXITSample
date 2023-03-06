import java.awt.*;
import java.util.ArrayList;
import java.util.List;

public class AppleFilter {

    public static List<Apple> filterApplesByColor(List<Apple> inventory, Color color) {
       List<Apple> result = new ArrayList<>();
       for (Apple apple : inventory) {
           if ( apple.getColor().equals(color)) {
               result.add(apple);
           }
       }
       return result;
    };

    public static List<Apple> filterApplesByWeight(List<Apple> inventory, int weight) {
        List<Apple> result = new ArrayList<>();
        for ( Apple apple : inventory) {
            if ( apple.getWeight() > weight ) {
                result.add(apple);
            }
        }
        return result;
    };

    public static List<Apple> filterApples(List<Apple> inventory, ApplePredicate p) {
        List<Apple> result = new ArrayList<>();
        for ( Apple apple : inventory) {
            if (p.test(apple)) {
                result.add(apple);
            }
        }
        return result;
    }
}
