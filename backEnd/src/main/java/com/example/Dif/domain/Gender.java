package com.example.Dif.domain;

public enum Gender {
    MASCULINO("masculino"),
    FEMENINO("femenino");

    private String spanishGender;

    Gender(String spanishGender){
        this.spanishGender = spanishGender;
    }

    public static Gender fromSpanish(String gender){
        for(Gender genderType : Gender.values()){
            if(genderType.toString().equalsIgnoreCase(gender)){
                return genderType;
            }
        }
        return null;
    }
}
