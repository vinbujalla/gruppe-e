package sep.tippspiel.user;

import com.google.common.hash.Hashing;
import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import javax.mail.internet.AddressException;
import javax.mail.internet.InternetAddress;
import java.nio.charset.StandardCharsets;
import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;


    public boolean createUser(String vorname, String nachname, String email,  String passwort){

        try {
            String sha256hex = Hashing.sha256()
                    .hashString(passwort, StandardCharsets.UTF_8)
                    .toString();
            Users user = new Users(vorname, nachname, email, sha256hex);
            userRepository.save(user);
            return true;
        } catch (Exception e) {
            e.printStackTrace();
            //System.err.println(e.getMessage());
            return false;
        }

    }

    public List<Users> all() {return userRepository.findAll();}

    public String findByEmail(String email) {
        return this.userRepository.findByEmail(email);
    }

    public List<Users> findByName(String vorname) {
        return this.userRepository.findByName(vorname);
    }

    public static boolean isValidEmailAddress(String email) {
        boolean result = true;
        try {
            InternetAddress emailAddr = new InternetAddress(email);
            emailAddr.validate();
        } catch (AddressException ex) {
            result = false;
        }
        return result;
    }



    public boolean loginUser(Users user) {
        List<Users> users = userRepository.findAll();

        for (Users other : users) {
            String sha256hex = Hashing.sha256()
                    .hashString(user.getPasswort(), StandardCharsets.UTF_8)
                    .toString();
            if (other.equals(user)) {
                if(this.userRepository.findByEmail(user.getPasswort()).equals(sha256hex)){
                    user.setLoggedIn(true);
                    userRepository.save(user);
                    return true;
                }

            }
        }
        return false;
    }


    public boolean logUserOut(Users user) {
        List<Users> users = userRepository.findAll();
        for (Users other : users) {
            if (other.equals(user)) {
                if(user.isLoggedIn() == true) {
                    user.setLoggedIn(false);
                    userRepository.save(user);
                    return true;
                }
            }
        }
        return false;
    }



}