package sep.tippspiel;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import sep.tippspiel.mannschaft.Mannschaft;
import sep.tippspiel.mannschaft.MannschaftRepository;
import sep.tippspiel.spiel.Spiel;
import sep.tippspiel.spiel.SpielRepository;
import sep.tippspiel.spieltag.Spieltag;
import sep.tippspiel.spieltag.SpieltagRepository;
import sep.tippspiel.systemadministrator.Systemadministrator;
import sep.tippspiel.systemadministrator.SystemadministratorRepository;
import sep.tippspiel.user.UserRepository;
import sep.tippspiel.user.Users;

import java.text.ParseException;


@Configuration
public class LoadDatabase {

    private static final Logger log = LoggerFactory.getLogger(LoadDatabase.class);
    @Bean
    CommandLineRunner initDatabase(UserRepository userRepository) {
        Users u1 = new Users("Melika", "Front" , "mel.front@gmail.com", "angular");
        Users u2 = new Users("Miriam", "Test" , "mir.test@gmail.com", "junit");
        Users u3 = new Users("Vincent", "TS" , "vin.front@gmail.com", "typescript");
        Users u4 = new Users("Kevin", "Docker" , "kev.dc@gmail.com", "docker");
        Users u5 = new Users("Serghei", "Back" , "ser.sp@gmail.com", "springboot");

        Systemadministrator sa1 = new Systemadministrator("System", "Administrator", "sysadmin@web.de","sysadmin");

        return args -> {
            log.info("Preloading " + userRepository.save(u1));
            log.info("Preloading " + userRepository.save(u2));
            log.info("Preloading " + userRepository.save(u3));
            log.info("Preloading " + userRepository.save(u4));
            log.info("Preloading " + userRepository.save(u5));

        };
    }
    @Bean
    CommandLineRunner initSA(SystemadministratorRepository systemadministratorRepository) {

        Systemadministrator sa1 = new Systemadministrator("System", "Administrator", "sysadmin@web.de","sysadmin");

        return args -> {
            log.info("Preloading " + systemadministratorRepository.save(sa1));

        };
    }

/*    @Bean
    CommandLineRunner initMa(MannschaftRepository mannschaftRepository) {

        Mannschaft ma1 = new Mannschaft("FC Bayern");
        Mannschaft ma2 = new Mannschaft("FC Schalke 04");

        return args -> {
            log.info("Preloading " + mannschaftRepository.save(ma1));
            log.info("Preloading " + mannschaftRepository.save(ma2));



        };
    }*/

    @Bean
    CommandLineRunner initSp(SpielRepository SpielRepository,MannschaftRepository mannschaftRepository, SpieltagRepository spieltagRepository) throws ParseException {
        Mannschaft ma1 = new Mannschaft("FC Bayern");
        Mannschaft ma2 = new Mannschaft("FC Schalke 04");
        Spieltag s = new Spieltag(1);
        Spiel s1 = new Spiel(ma1,ma2,"Fri Aug 9 2013", "3-1",s);


        return args -> {
            log.info("Preloading " + mannschaftRepository.save(ma1));
            log.info("Preloading " + mannschaftRepository.save(ma2));
            log.info("Preloading " + spieltagRepository.save(s));
            log.info("Preloading " + SpielRepository.save(s1));


        };
    }
    
}