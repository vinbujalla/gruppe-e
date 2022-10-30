package com.example.angular_arbeitspaket_server.test;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class testController
{
    private final testRepository testRepository;

    public testController(testRepository testRepository) {
        this.testRepository = testRepository;
    }

    @GetMapping("/students")
    public List<test> getStudents()
    {
        return (List<test>) testRepository.findAll();
    }

    @PostMapping("/students")
    public void addStudent(@RequestBody test test) {
        testRepository.save(test);}

    @DeleteMapping(path = "students/{studentID}")
    public void deleteStudent(@PathVariable("studentID")long id)
    {
        testRepository.deleteById(id);
    }

    @GetMapping(path = "students/lastname/{studentLastName}")
    public List<test> getStudentsByLastName(@PathVariable("studentLastName")String lastname) {return (List<test>) testRepository.findStudentByLastName(lastname);}

    @GetMapping(path = "students/firstname/{studentFirstName}")
    public List<test> getStudentsByFirstName(@PathVariable("studentFirstName")String firstName){return (List<test>) testRepository.findStudentByFirstName(firstName);}

    @GetMapping(path = "students/subject/{Subject}")
    public List<test> getStudentsBySubject(@PathVariable("Subject")String Subject){return (List<test>) testRepository.findStudentBySubject(Subject);}

    @GetMapping(path = "students/email/{StudentEmail}")
    public List<test> getStudentsByEmail(@PathVariable("StudentEmail")String StudentEmail){return (List<test>) testRepository.findStudentByEmail(StudentEmail);}

}
