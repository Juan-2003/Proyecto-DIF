package com.example.Dif.service;

import com.example.Dif.domain.User;
import com.example.Dif.dto.SignUpDataDTO;
import com.example.Dif.dto.SignUpResponseDTO;
import com.example.Dif.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SignUpService {
    private final UserRepository userRepository;

    @Autowired
    public SignUpService(UserRepository userRepository){
        this.userRepository = userRepository;
    }

    public SignUpResponseDTO signUp(SignUpDataDTO signUpDataDTO){
        User user = new User(signUpDataDTO);
        userRepository.save(user);

        return new SignUpResponseDTO(user);
    }
}
