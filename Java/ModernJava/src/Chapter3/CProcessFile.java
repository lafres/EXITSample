package Chapter3;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

public class CProcessFile {
    public String processFile() throws IOException {
        try (BufferedReader br = new BufferedReader(new FileReader("data.txt"))) {
            return br.readLine(); //실제 작업을 하는 행.
        }
    }

    public void test () throws IOException {
        String result = processFile((BufferedReader br)-> br.readLine() + br.readLine());
    }

    @FunctionalInterface
    public interface BufferedReaderProcessor {
        String process(BufferedReader b) throws IOException;
    }

    public String processFile(BufferedReaderProcessor p) throws IOException {
        try (BufferedReader br = new BufferedReader(new FileReader("data.txt"))) {
            return p.process(br);
        }
    }


}


