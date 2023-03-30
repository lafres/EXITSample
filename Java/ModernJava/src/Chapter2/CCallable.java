package Chapter2;

import java.util.concurrent.Callable;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.Future;

public class CCallable {
    public static void test () {
        ExecutorService executorService = Executors.newCachedThreadPool();
        Future<String> threadName = executorService.submit(new Callable<String>() {
           @Override
           public String call() throws Exception {
               return Thread.currentThread().getName();
           }
        });
        //위의 코드를 아래의 람다식으로 변경 가능.
        Future<String> threadName2 = executorService.submit(
                ()->Thread.currentThread().getName()
        );
    }
}
