package Chapter3;

public class CRunnable {
    public static void process(Runnable r) {
        r.run();
    }
    public void test() {

        Runnable r1 = () -> System.out.println("Hello World"); // 람다 사용

        Runnable r2 = new Runnable() { // 익명클래스 사용
            @Override
            public void run() {
                System.out.println("Hello World");
            }
        };

        process( r1 );
        process( r2 );
        process(() -> System.out.println("Hello world 3")); //직접 전달된 람다 표현식.
    }

}
