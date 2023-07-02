package br.com.buki.bukiApi.dto;

import br.com.buki.bukiApi.model.UserModel;

public record UserResponseDTO(Long id_user, String nome, String usuario, String email, String senha) {
    public UserResponseDTO(UserModel userModel) {
        this(userModel.getId_user(), userModel.getNome(), userModel.getUsuario(), userModel.getEmail(), userModel.getSenha());
    }


}
