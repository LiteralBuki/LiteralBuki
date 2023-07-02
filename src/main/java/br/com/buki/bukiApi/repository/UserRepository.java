package br.com.buki.bukiApi.repository;

import br.com.buki.bukiApi.model.UserModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.BAD_REQUEST)
public interface UserRepository extends JpaRepository<UserModel, Long> {
    @Query("SELECT i from User i WHERE i.email = :email")
    UserModel findByEmail(String email);
}
