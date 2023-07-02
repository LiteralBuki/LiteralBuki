package br.com.buki.bukiApi.service;

import br.com.buki.bukiApi.model.UserDetailsImpl;
import br.com.buki.bukiApi.model.UserModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import br.com.buki.bukiApi.repository.UserRepository;
import org.springframework.stereotype.Service;

@Service
public class UserService implements UserDetailsService {
    @Autowired
    private UserRepository userRepository;

    public UserService(UserRepository repository) {
        this.userRepository = repository;
    }


    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        UserModel userModel = userRepository.findByEmail(email);
        new UsernameNotFoundException("Usuário não encontrado!");
        return new UserDetailsImpl(userModel);
    }

    public void salvarUsuario(UserModel userModel){
        //String hashSenha = PasswordUtil.encoder(usuario.getSenha());
        //usuario.setSenha(hashSenha);

        userRepository.save(userModel);
    }

    public Boolean validarSenha(UserModel userModel) {
        String senha = userRepository.findByEmail(userModel.getEmail()).getSenha();
        Boolean valid = senha.equals(userModel.getSenha());
        return valid;
    }
}
