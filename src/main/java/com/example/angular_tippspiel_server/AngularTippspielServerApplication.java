package com.example.angular_tippspiel_server;

import com.example.angular_tippspiel_server.user.Student;
import com.example.angular_tippspiel_server.user.StudentRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class AngularTippspielServerApplication {

    public static void main(String[] args) {
        SpringApplication.run(AngularTippspielServerApplication.class, args);
    }

    //Beispiel Daten werden in Datenbank gespeichert.
    @Bean
    CommandLineRunner init(StudentRepository studentRepository)
    {
        return args ->
        {
          studentRepository.save(new Student("Gandalf","The White","Magie","gandalf@lotr.com"));
          studentRepository.save(new Student("Frodo","Beutlin","Ringschmieden","Frodo.Beutlin@lotr.com"));
          studentRepository.save(new Student("Aragorn","Elessar","Schwertkunst","aragorn@lotr.com"));
          studentRepository.save(new Student("Samwise","Gamgee","Botanik","sam@lotr.com"));
          studentRepository.save(new Student("Bilbo","Beutlin","Literatur","bilbo@lotr.com"));
          studentRepository.save(new Student("Daenerys","Targaryen","Drachenkunde","daeny@got.com"));
          studentRepository.save(new Student("Jon","Snow","Nichts","jon@lotr.com"));
          studentRepository.save(new Student("Samwell","Tarly","Literatur","sam@got.com"));
          studentRepository.save(new Student("Tyrion","Lannister","Wein","tyrion@got.com"));
        };
    }

}
