package com.example.Dif.domain;

import java.lang.reflect.Array;
import java.util.*;

public class CityFilter {
    private static final Map<State, List<String>> citiesMap = new HashMap<>();

    static{
        citiesMap.put(State.AGUASCALIENTES, Arrays.asList("Aguascalientes", "Calvillo", "Jesús María", "Pabellón de Arteaga", "San Francisco de los Romo"));
        citiesMap.put(State.BAJA_CALIFORNIA, Arrays.asList("Tijuana", "Mexicali", "Ensenada", "Rosarito", "Tecate"));
        citiesMap.put(State.BAJA_CALIFORNIA_SUR, Arrays.asList("La Paz", "Los Cabos", "Cabo San Lucas", "San José del Cabo", "Loreto"));
        citiesMap.put(State.CAMPECHE, Arrays.asList("Campeche", "San Francisco de Campeche", "Calkiní", "Champotón", "Escárcega"));
        citiesMap.put(State.CHIAPAS, Arrays.asList("Tuxtla Gutiérrez", "San Cristóbal de las Casas", "Tapachula", "Palenque", "Comitán"));
        citiesMap.put(State.CHIHUAHUA, Arrays.asList("Chihuahua", "Juárez", "Delicias", "Nuevo Casas Grandes", "Camargo"));
        citiesMap.put(State.CIUDAD_DE_MEXICO, Arrays.asList("Álvaro Obregón", "Coyoacán", "Cuauhtémoc", "Gustavo A. Madero", "Iztacalco"));
        citiesMap.put(State.COAHUILA, Arrays.asList("Saltillo", "Torreón", "Monclova", "Piedras Negras", "Frontera"));
        citiesMap.put(State.COLIMA, Arrays.asList("Colima", "Manzanillo", "Tecomán", "Villa de Álvarez", "Comala"));
        citiesMap.put(State.DURANGO, Arrays.asList("Durango", "Gómez Palacio", "Lerdo", "Canatlán", "El Mezquital"));
        citiesMap.put(State.ESTADO_DE_MEXICO, Arrays.asList("Toluca", "Ecatepec", "Naucalpan", "Tlalnepantla", "Chalco"));
        citiesMap.put(State.GUANAJUATO, Arrays.asList("Guanajuato", "León", "Irapuato", "Celaya", "Silao"));
        citiesMap.put(State.GUERRERO, Arrays.asList("Acapulco", "Chilpancingo", "Iguala", "Zihuatanejo", "Taxco"));
        citiesMap.put(State.HIDALGO, Arrays.asList("Pachuca", "Tizayuca", "Tulancingo", "Huejutla de Reyes", "Progreso de Obregón"));
        citiesMap.put(State.JALISCO, Arrays.asList("Guadalajara", "Zapopan", "Tlaquepaque", "Puerto Vallarta", "Lagos de Moreno"));
        citiesMap.put(State.MICHOACAN, Arrays.asList("Morelia", "Uruapan", "Zamora", "Lázaro Cárdenas", "Apatzingán"));
        citiesMap.put(State.MORELOS, Arrays.asList("Cuernavaca", "Temixco", "Jiutepec", "Cuautla", "Jojutla"));
        citiesMap.put(State.NAYARIT, Arrays.asList("Tepic", "Xalisco", "Bahía de Banderas", "San Blas", "Tuxpan"));
        citiesMap.put(State.NUEVO_LEON, Arrays.asList("Monterrey", "San Pedro Garza García", "Santa Catarina", "Apodaca", "San Nicolás"));
        citiesMap.put(State.OAXACA, Arrays.asList("Oaxaca de Juárez", "Santa Cruz Xoxocotlán", "San Juan Bautista Tuxtepec", "Juchitán de Zaragoza", "Tehuantepec"));
        citiesMap.put(State.PUEBLA, Arrays.asList("Puebla", "Tehuacán", "Atlixco", "San Martín Texmelucan", "Cholula"));
        citiesMap.put(State.QUERETARO, Arrays.asList("Querétaro", "El Marqués", "San Juan del Río", "Tequisquiapan", "Cadereyta"));
        citiesMap.put(State.QUINTANA_ROO, Arrays.asList("Cancún", "Playa del Carmen", "Tulum", "Chetumal", "Isla Mujeres"));
        citiesMap.put(State.SAN_LUIS_POTOSÍ, Arrays.asList("San Luis Potosí", "Matehuala", "Soledad de Graciano Sánchez", "Ciudad Valles", "Rioverde"));
        citiesMap.put(State.SINALOA, Arrays.asList("Culiacán", "Mazatlán", "Los Mochis", "El Fuerte", "Guasave"));
        citiesMap.put(State.SONORA, Arrays.asList("Hermosillo", "Ciudad Obregón", "Nogales", "San Luis Río Colorado", "Cananea"));
        citiesMap.put(State.TABASCO, Arrays.asList("Villahermosa", "Cárdenas", "Comalcalco", "Tabasco", "Jalpa"));
        citiesMap.put(State.TAMAULIPAS, Arrays.asList("Ciudad Victoria", "Matamoros", "Reynosa", "Tampico", "Altamira"));
        citiesMap.put(State.TLAXCALA, Arrays.asList("Tlaxcala", "Apizaco", "Huamantla", "Chiautempan", "Tetla"));
        citiesMap.put(State.VERACRUZ, Arrays.asList("Veracruz", "Xalapa", "Orizaba", "Córdoba", "Poza Rica"));
        citiesMap.put(State.YUCATAN, Arrays.asList("Mérida", "Tizimin", "Progreso", "Valladolid", "Motul"));
        citiesMap.put(State.ZACATECAS, Arrays.asList("Zacatecas", "Guadalupe", "Fresnillo", "Jerez de García Salinas", "Sombrerete"));
    }

    public static List<String> getCitiesByState(State state){
        return citiesMap.getOrDefault(state, Collections.emptyList());
    }
}
