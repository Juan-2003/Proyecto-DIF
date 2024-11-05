package com.example.Dif.validations.signUp;

import com.example.Dif.DateConverter;
import com.example.Dif.dto.SignUpDataDTO;
import com.example.Dif.validations.SignUpValidator;
import org.springframework.stereotype.Component;

import java.time.LocalDate;

@Component
public class DateValidation implements SignUpValidator<SignUpDataDTO> {
    @Override
    public void validator(SignUpDataDTO signUpDataDTO) {
        String date = signUpDataDTO.birthday();

        LocalDate expirationDate = DateConverter.dateConverter(date);

        if(expirationDate.isBefore(LocalDate.now()) || expirationDate.equals(LocalDate.now())){
            throw new RuntimeException("La fecha ingresada no puede ser el dia en curso, ni dias previos: " + expirationDate);
        }
    }
}
