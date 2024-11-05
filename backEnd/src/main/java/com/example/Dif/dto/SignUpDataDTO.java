package com.example.Dif.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

@JsonPropertyOrder({"name", "patternal_sur_name", "matternal_sur_name", "birthday", "gender", "state", "city", "address", "postal_code", "phone_number", "mail", "password"})
public record SignUpDataDTO(
        @NotNull(message = "'name' no puede ser nulo")
        String name,

        @JsonProperty("patternal_sur_name")
        @NotNull(message = "'Apellido paterno' no puede ser nulo")
        String patternalSurName,

        @JsonProperty("matternal_sur_name")
        @NotNull(message = "'Apellido materno' no puede ser nulo")
        String matternalSurName,

        @NotNull(message = "'Fecha de cumpleaños' no puede ser nulo")
        String birthday,

        @NotNull(message = "'genero' no puede ser nulo")
        String gender,

        @NotNull(message = "'Estado' no puede ser nulo")
        String state,

        @NotNull(message = "'ciudad' no puede ser nulo")
        String city,

        @NotNull(message = "'Direccion' no puede ser nulo")
        String address,

        @JsonProperty("postal_code")
        @NotNull(message = "'Codigo Postal' no puede ser nulo")
        @Size(min=4, max = 4, message = "'Codigo Postal' solo puede tener 4 digitos" )
        String postalCode,

        @JsonProperty("phone_number")
        @NotNull(message = "'Número de telefono' no puede ser nulo")
        @Size(min = 10, max = 10, message = "'Número de telefono' debe tener 10 digitos")
        String phoneNumber,

        @NotNull(message = "'Correo' no puede ser nulo")
        String mail,

        @NotNull(message = "'La contraseña' no puede ser nulo")
        String password
) {
}
