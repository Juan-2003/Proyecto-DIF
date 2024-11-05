package com.example.Dif.validations.signUp;

import com.example.Dif.domain.User;
import com.example.Dif.dto.SignUpDataDTO;
import com.example.Dif.repository.UserRepository;
import com.example.Dif.validations.SignUpValidator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class MailValidation implements SignUpValidator<SignUpDataDTO> {
    private final UserRepository userRepository;

    @Autowired
    public MailValidation(UserRepository userRepository){
        this.userRepository = userRepository;
    }

    @Override
    public void validator(SignUpDataDTO signUpDataDTO) {
        String userMail = signUpDataDTO.mail();

        List<User> userList = userRepository.findAll();
        boolean flag = userList.stream()
                .anyMatch(u -> u.getMail().equals(userMail));

        if(flag){
            throw new RuntimeException("Ya existe una cuenta con el correo: "+ userMail);
        }
    }
}
