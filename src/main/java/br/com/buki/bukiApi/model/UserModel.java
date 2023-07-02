package br.com.buki.bukiApi.model;

import jakarta.persistence.*;
import lombok.*;

@Table(name = "User", schema = "bukidatabase")
@Entity(name = "User")
@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
@Builder
@EqualsAndHashCode(of = "id_user")
public class UserModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_user")
    private Long id_user;
    @Column(name = "nome")
    private String nome;
    @Column(name = "usuario")
    private String usuario;
    @Column(name = "email")
    private String email;
    @Column(name = "senha")
    private String senha;

    public UserModel(DataUserRegister dataUserRegister) {
        this.nome = dataUserRegister.nome();
        this.usuario = dataUserRegister.usuario();
        this.email = dataUserRegister.email();
        this.senha = dataUserRegister.senha();
    }
}
