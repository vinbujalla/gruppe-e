
FROM maven:3.8.6-openjdk-18 AS build
COPY src /usr/src/app/src
COPY pom.xml /usr/src/app
RUN mvn -f /usr/src/app/pom.xml clean install



FROM openjdk:18-jdk-alpine
VOLUME /tmp
COPY --from=build /usr/src/app/target/* /usr/app/
EXPOSE 8080
ENTRYPOINT ["java","-jar","/usr/app/Tippspiel.jar"]