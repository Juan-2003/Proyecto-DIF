package com.example.Dif.domain;

import com.example.Dif.Data;
import com.example.Dif.dto.SignUpDataDTO;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;

@Entity(name = "User")
@Table(name = "user")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class User extends Data {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    public User(SignUpDataDTO signUpDataDTO){
        this.name = signUpDataDTO.name();
        this.patternalSurName = signUpDataDTO.patternalSurName();
        this.matternalSurName = signUpDataDTO.matternalSurName();
        this.birthday = LocalDate.parse(signUpDataDTO.birthday());
        this.gender = Gender.fromSpanish(signUpDataDTO.gender());
        this.state = State.fromSpanish(signUpDataDTO.state());
        this.city = Cities.fromSpanish(signUpDataDTO.city());
        this.address = signUpDataDTO.address();
        this.postalCode = signUpDataDTO.postalCode();
        this.phoneNumber = signUpDataDTO.phoneNumber();
        this.mail = signUpDataDTO.mail();
        this.password = signUpDataDTO.password();
    }
}
