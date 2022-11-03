package com.example.angular_tippspiel_server.user;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/user")
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {

    @Autowired
    UserService userService;

    @PostMapping(path = "/create",  produces = "application/json", consumes = "application/json")
    public ResponseEntity<String> createUser(@RequestBody Users user) {
        if(true) {
            this.userService.createUser(user.getVorname(), user.getNachname(), user.getEmail(), user.getPasswort());
            return new ResponseEntity<>("User wurde erstellt:", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("User konnte nicht erstellt werden", HttpStatus.OK);
        }
    }

    @GetMapping(path = "/all", produces = "application/json")
    public ResponseEntity<List<Users>> getAllUsers() {
        List<Users> allUsers = this.userService.all();
        return new ResponseEntity<>(allUsers, HttpStatus.OK);
    }
}
