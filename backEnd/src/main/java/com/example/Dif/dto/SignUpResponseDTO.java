package com.example.Dif.dto;

import com.example.Dif.domain.User;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

@JsonPropertyOrder({"user_id", "name", "patternal_sur_name", "matternal_sur_name", "birthday", "gender", "state", "city", "address", "postal_code", "phone_number", "mail", "password"})
public record SignUpResponseDTO(
        @JsonProperty("user_id")
        Long userId,
        String name,

        @JsonProperty("patternal_sur_name")
        String patternalSurName,

        @JsonProperty("matternal_sur_name")
        String matternalSurName,
        String birthday,
        String gender,
        String state,
        String city,
        String address,

        @JsonProperty("postal_code")
        String postalCode,

        @JsonProperty("phone_number")
        String phoneNumber,
        String mail,
        String password
) {
    public SignUpResponseDTO(User user){
        this(
                user.getId(),
                user.getName(),
                user.getPatternalSurName(),
                user.getMatternalSurName(),
                String.valueOf(user.getBirthday()),
                String.valueOf(user.getGender()),
                String.valueOf(user.getState()),
                String.valueOf(user.getCity()),
                user.getAddress(),
                user.getPostalCode(),
                user.getPhoneNumber(),
                user.getMail(),
                user.getPassword()
        );
    }
}
