package sep.tippspiel.login;


import org.springframework.stereotype.Service;
import sep.tippspiel.user.Users;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@Service
public class Login extends HttpServlet {

    private Users users;

    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html");
        PrintWriter out=response.getWriter();

        request.getRequestDispatcher("link.html").include(request, response);

        String name=request.getParameter(users.getEmail());
        String password=request.getParameter(users.getPasswort());

        if(password.equals(users.getPasswort())){
            out.print("You are successfully logged in!");
            out.print("<br>Welcome, "+name);

            Cookie ck = new Cookie("name",name);
            response.addCookie(ck);
        }else{
            out.print("sorry, username or password error!");
            request.getRequestDispatcher("login.html").include(request, response);
        }

        out.close();
    }

    public void setUsers(Users users) {
        this.users = users;
    }
}
