package br.com.buki.bukiApi;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

@SpringBootApplication(exclude = {SecurityAutoConfiguration.class})
public class BukiApiApplication {

	public static void main(String[] args) {
		SpringApplication.run(BukiApiApplication.class, args);
	}

}
