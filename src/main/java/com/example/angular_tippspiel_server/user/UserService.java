package sep.tippspiel.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public void createUser(String vorname, String nachname, String email, String password) {
        Users user = new Users(vorname, nachname, email, password);
        userRepository.save(user);
    }

    public List<Users> all() {return userRepository.findAll();}
}
