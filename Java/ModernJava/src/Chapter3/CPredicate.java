package Chapter3;

import java.util.function.Predicate;

public class CPredicate {
    public static void test_1() {
        // 1. test
        Predicate<Integer> predicate = (num) -> num<10;
        System.out.println(predicate.test(5));
    }

    public static void test_2() {
        Predicate<Integer> predicate1 = (num) -> num < 10;
        Predicate<Integer> predicate2 = (num) -> num < 5;

        System.out.println(predicate1.and(predicate2).test(7));
    }

}
