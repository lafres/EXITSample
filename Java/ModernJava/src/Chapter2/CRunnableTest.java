package Chapter2;

public class CRunnableTest {
    public static void test() {
        Thread t = new Thread(new java.lang.Runnable() {
            @Override
            public void run() {
                System.out.println("Helow world");
            }
        });

        Thread t1 = new Thread(() -> System.out.println("Hello World"));
    }
}
