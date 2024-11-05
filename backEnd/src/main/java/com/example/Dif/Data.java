package com.example.Dif;

import com.example.Dif.domain.Cities;
import com.example.Dif.domain.Gender;
import com.example.Dif.domain.State;
import jakarta.persistence.Column;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.MappedSuperclass;
import jakarta.validation.constraints.Pattern;
import lombok.Getter;
import lombok.Setter;
import org.springframework.stereotype.Component;

import java.time.LocalDate;

@MappedSuperclass
@Getter
@Setter
public abstract class Data {
    protected String name;

    @Column(name = "patternal_sur_name")
    protected String patternalSurName;

    @Column(name = "matternal_sur_name")
    protected String matternalSurName;

    @Column(columnDefinition = "TEXT")
    protected LocalDate birthday;

    @Enumerated(EnumType.STRING)
    protected Gender gender;

    @Enumerated(EnumType.STRING)
    protected State state;

    protected Cities city;
    protected String address;
    @Column(name = "postal_code")
    protected String postalCode;

    @Column(name = "phone_number")
    protected String phoneNumber;

    protected String mail;
    protected String password;
}
