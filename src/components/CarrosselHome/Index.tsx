import { View, Text, Image, TouchableOpacity } from "react-native";
import Swiper from "react-native-swiper";
import styles from "./Styles";

import imagem1 from "../../assets/iema-bacana-1-1.jpg";
import imagem2 from "../../assets/iema-bacana-2.jpeg";
import imagem3 from "../../assets/iema-bacana-3.jpeg";

const slides = [
  {
    titulo: "Conectando histórias, construindo futuros",
    texto:
      "O Portal para alunos do IEMA é um espaço dedicado ao acompanhamento da trajetória dos nossos ex-alunos.",
    botao: "Saiba Mais",
    imagem: imagem1,
  },
  {
    titulo: "Mantenha seu DNA IEMA vivo",
    texto:
      "Atualize seu perfil e compartilhe suas conquistas com a nossa comunidade acadêmica.",
    botao: "Ver Perfil",
    imagem: imagem2,
  },
  {
    titulo: "Oportunidades e Networking",
    texto:
      "Acesse vagas exclusivas e conecte-se com outros profissionais formados pelo IEMA.",
    botao: "Explorar",
    imagem: imagem3,
  },
];

export default function CarrosselHome() {
  return (
    <View style={styles.container}>
      <Swiper
        autoplay
        autoplayTimeout={5}
        showsPagination
        dotStyle={styles.dot}
        activeDotStyle={styles.activeDot}
      >
        {slides.map((slide, index) => (
          <View key={index} style={styles.slide}>
            <Image source={slide.imagem} style={styles.image} />

            <View style={styles.overlay}>
              <Text style={styles.title}>{slide.titulo}</Text>
              <Text style={styles.text}>{slide.texto}</Text>

              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>{slide.botao}</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </Swiper>
    </View>
  );
}