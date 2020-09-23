package com.zonionsfirst.security;

import org.springframework.context.annotation.Bean;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.password.NoOpPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;


//Spring Security Configuration
@EnableWebSecurity
public class SecurityConfiguration extends WebSecurityConfigurerAdapter{
	
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
		//Setting Email and Password
		auth.inMemoryAuthentication()
		.withUser("Admin@gmail.com")
		.password("admin123")
		.roles("ADMIN");
	}
	
	@Bean
	public PasswordEncoder getPasswordEncoder() {
		
		return NoOpPasswordEncoder.getInstance();
	}

	//Setting Autherization of user and admin
	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http.authorizeRequests()
				.antMatchers("/add").hasRole("ADMIN")
				.antMatchers("/update/{id}").hasRole("ADMIN")
				.antMatchers("/delete/{id}").hasRole("ADMIN")
				.antMatchers("/login").permitAll()
				.antMatchers("/details/{id}").permitAll()
				.antMatchers("/getlist").permitAll()
				.and().formLogin();
	}
}
