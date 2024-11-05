package com.example.Dif.domain;

public enum Cities {
    AGUASCALIENTES("Aguascalientes"),
    CIUDAD_DE_MEXICO("Ciudad de México"),
    GUADALAJARA("Guadalajara"),
    MONTERREY("Monterrey"),
    PUEBLA("Puebla"),
    LEON("León"),
    TIJUANA("Tijuana"),
    MERIDA("Mérida"),
    CANCUN("Cancún"),
    CHIHUAHUA("Chihuahua"),
    SALTILLO("Saltillo"),
    CULIACAN("Culiacán"),
    VERACRUZ("Veracruz"),
    OAXACA("Oaxaca"),
    SAN_LUIS_POTOSI("San Luis Potosí"),
    MORELIA("Morelia"),
    TAMPICO("Tampico"),
    HERMOSILLO("Hermosillo"),
    TORREON("Torreón"),
    NUEVO_LAREDO("Nuevo Laredo"),
    MATAMOROS("Matamoros"),
    ZACATECAS("Zacatecas"),
    SAN_CRISTOBAL_DE_LAS_CASAS("San Cristóbal de las Casas"),
    DURANGO("Durango"),
    TAPACHULA("Tapachula"),
    CD_OBREGON("Ciudad Obregón"),
    CHETUMAL("Chetumal"),
    ACAPULCO("Acapulco"),
    SAN_ANDRES_TUXTLA("San Andrés Tuxtla"),
    PIEDRAS_NEGRAS("Piedras Negras"),
    LA_PAZ("La Paz"),
    SAN_MIGUEL_DE_ALLENDE("San Miguel de Allende"),
    CORDOBA("Córdoba"),
    SAN_LUIS_DE_POTOSI("San Luis de Potosí"),
    XALAPA("Xalapa"),
    MEXICALI("Mexicali");

    private final String spanishCity;

    Cities(String spanishCity){
        this.spanishCity = spanishCity;
    }

    public static Cities fromSpanish(String textCity){
        for(Cities city : Cities.values()){
            if(textCity.equalsIgnoreCase(city.toString())){
                return city;
            }
        }
        return null;
    }
}
