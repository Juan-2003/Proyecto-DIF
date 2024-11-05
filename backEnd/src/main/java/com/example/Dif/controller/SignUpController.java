package com.example.Dif.controller;

import com.example.Dif.domain.CityFilter;
import com.example.Dif.domain.State;
import com.example.Dif.dto.SignUpDataDTO;
import com.example.Dif.dto.SignUpResponseDTO;
import com.example.Dif.service.SignUpService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/dif-alerta-ciudadana")
public class SignUpController {
    private final SignUpService signUpService;

    @Autowired
    public SignUpController(SignUpService signUpService){
        this.signUpService = signUpService;
    }

    @PostMapping
    public ResponseEntity<SignUpResponseDTO> signUp(@Valid @RequestBody SignUpDataDTO signUpDataDTO){
        SignUpResponseDTO signUpResponseDTO = signUpService.signUp(signUpDataDTO);
        return ResponseEntity.ok(signUpResponseDTO);
    }
}
