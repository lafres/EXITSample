package Chapter2;

public class CRunnableTest {
    public static void test() {
        Thread t = new Thread(new java.lang.Runnable() {
            @Override
            public void run() {
                System.out.println("Helow world");
            }
        });
        //위의 코드를 아래의 람다식으로 변경 가능.
        Thread t1 = new Thread(() -> System.out.println("Hello World"));
    }
}
