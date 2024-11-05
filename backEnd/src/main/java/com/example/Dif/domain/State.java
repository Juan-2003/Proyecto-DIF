package com.example.Dif.domain;

public enum State {
    AGUASCALIENTES("aguascalientes"),
    BAJA_CALIFORNIA("baja california"),
    BAJA_CALIFORNIA_SUR("baja california sur"),
    CAMPECHE("campeche"),
    CHIAPAS("chiapas"),
    CHIHUAHUA("chihuahua"),
    CIUDAD_DE_MEXICO("ciudad de mexico"),
    COAHUILA("coahuila"),
    COLIMA("colima"),
    DURANGO("durango"),
    ESTADO_DE_MEXICO("estado de mexico"),
    GUANAJUATO("guanajuato"),
    GUERRERO("guerrero"),
    HIDALGO("hidalgo"),
    JALISCO("jalisco"),
    MICHOACAN("michoacan"),
    MORELOS("morelos"),
    NAYARIT("nayarit"),
    NUEVO_LEON("nuevo leon"),
    OAXACA("oaxaca"),
    PUEBLA("puebla"),
    QUERETARO("queretaro"),
    QUINTANA_ROO("quintana roo"),
    SAN_LUIS_POTOSÍ("san luis potosi"),
    SINALOA("sinaloa"),
    SONORA("sonora"),
    TABASCO("tabasco"),
    TAMAULIPAS("tamaulipas"),
    TLAXCALA("tlaxcala"),
    VERACRUZ("veracruz"),
    YUCATAN("yucatán"),
    ZACATECAS("zacatecas");

    private final String spanishState;

    State(String spanishState){
        this.spanishState = spanishState;
    }

    public static State fromSpanish(String state){
        for(State stateType : State.values()){
            if(state.equalsIgnoreCase(stateType.toString())){
                return stateType;
            }
        }
        return null;
    }
}
