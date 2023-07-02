package br.com.buki.bukiApi.controller;


import br.com.buki.bukiApi.dto.UserResponseDTO;
import br.com.buki.bukiApi.model.DataUserRegister;
import br.com.buki.bukiApi.model.UserModel;
import br.com.buki.bukiApi.repository.UserRepository;
import br.com.buki.bukiApi.service.UserService;
import jakarta.transaction.Transactional;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin("*")
@RequestMapping("/usuario")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserService userService;

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping
    @Transactional
    public void Usuario(@RequestBody @Valid DataUserRegister data) throws Exception{
        userService.salvarUsuario(new UserModel(data));
    }

    @PostMapping("/login")
    public ResponseEntity<UserModel> validarSenha(@Valid @RequestBody UserModel userModel){
        Boolean valid = userService.validarSenha(userModel);
        if(!valid){
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
        return ResponseEntity.status(200).build();
    }

    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public Map<String, String> handlerValidationException(MethodArgumentNotValidException ex){
        Map<String, String> errors = new HashMap<>();

        ex.getBindingResult().getAllErrors().forEach((error) -> {
            String fielName = ((FieldError) error).getField();
            String errorMessage = error.getDefaultMessage();

            errors.put(fielName, errorMessage);
        } );

        return errors;
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping
    public List<UserResponseDTO> getALL() {

        List<UserResponseDTO> usuarioList = userRepository.findAll().stream().map(UserResponseDTO::new).toList();
        return usuarioList;
    }


}
