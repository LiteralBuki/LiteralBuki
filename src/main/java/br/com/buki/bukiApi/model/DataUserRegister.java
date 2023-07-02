package br.com.buki.bukiApi.model;

import jakarta.validation.constraints.*;

public record DataUserRegister(
    @NotNull(message = "Nome não pode ser nulo")
    @NotBlank(message = "Nome não pode ser nulo")
    String nome,
    @NotNull(message = "Usuário não pode ser nulo")
    @NotBlank(message = "Usuário não pode ser nulo")
    String usuario,
    @Email(message = "Digite corretamente")
    @NotNull(message = "E-mail não pode ser nulo")
    @NotBlank(message = "E-mail não pode ser nulo")
    String email,

    @Size(min = 8)
    @NotNull(message = "Senha não pode ser nulo")
    @NotBlank(message = "Senha não pode ser nulo")
    String senha) {
    }

