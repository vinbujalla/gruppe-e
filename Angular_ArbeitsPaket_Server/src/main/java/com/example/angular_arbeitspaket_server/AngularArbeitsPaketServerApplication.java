package com.example.angular_arbeitspaket_server;

import com.example.angular_arbeitspaket_server.test.test;
import com.example.angular_arbeitspaket_server.test.testRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class AngularArbeitsPaketServerApplication {

    public static void main(String[] args) {
        SpringApplication.run(AngularArbeitsPaketServerApplication.class, args);
    }

    //Beispiel Daten werden in Datenbank gespeichert.
    @Bean
    CommandLineRunner init(testRepository testRepository)
    {
        return args ->
        {
          testRepository.save(new test("Gandalf","The White","Magie","gandalf@lotr.com"));
          testRepository.save(new test("Frodo","Beutlin","Ringschmieden","Frodo.Beutlin@lotr.com"));
          testRepository.save(new test("Aragorn","Elessar","Schwertkunst","aragorn@lotr.com"));
          testRepository.save(new test("Samwise","Gamgee","Botanik","sam@lotr.com"));
          testRepository.save(new test("Bilbo","Beutlin","Literatur","bilbo@lotr.com"));
          testRepository.save(new test("Daenerys","Targaryen","Drachenkunde","daeny@got.com"));
          testRepository.save(new test("Jon","Snow","Nichts","jon@lotr.com"));
          testRepository.save(new test("Samwell","Tarly","Literatur","sam@got.com"));
          testRepository.save(new test("Tyrion","Lannister","Wein","tyrion@got.com"));
        };
    }

}
