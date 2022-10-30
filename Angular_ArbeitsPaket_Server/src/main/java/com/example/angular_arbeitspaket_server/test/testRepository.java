package com.example.angular_arbeitspaket_server.test;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface testRepository extends JpaRepository<test,Long>
{
    public List<test> findStudentByLastName(String lastName);
    public List<test> findStudentByFirstName(String firstName);
    public List<test> findStudentBySubject(String subject);
    public List<test> findStudentByEmail(String email);
}
