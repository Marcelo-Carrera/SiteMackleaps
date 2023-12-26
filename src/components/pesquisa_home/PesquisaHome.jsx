"use client";

import styles from "./PesquisaHome.module.css";
import { MoreButton } from "@/components/moreButton/MoreButton";
import { PesquisaCard } from "../pesquisa_card/PesquisaCars";
import React from "react";

// const json = [
//   {
//     img: "https://s3-alpha-sig.figma.com/img/c2b5/efdc/b7ac7c5155d247c0bc0f2a38b2e9f3fa?Expires=1704067200&Signature=cLdMKmGw5N9r9XxFXKi~W0QFMr5lcXX3V6k7l2XW0yKALNq5Lmjpc0YewAJ4L6wn3wPxol9VEDDKjyH5kyprw41fXXIbB9PyWZrUuwWiFOeR4qvyFreMlNmJ9S5162ZOa2WkWivAAYHcBu8wCaQlXPnt6A0Bv2s2TvfdE5ExACaxQ48afLsKlaDL8~PEj0Eh~gz0pB6TvXFpEZ5iCpmW6zR1SKd5M1Q3Q-h1TOpScNOvY9aSgBSTuWfOIM9ig9XVeycC7cAtOIkAQVm05k4O-R5eCT6OCeUWKzukSOv5S6xkIXDQ6Izx2Pbo7JzQdi8Pfg4lMwPTURgQv0rqPEE3dw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
//     txt: "Proposta de um modelo de PSP adaptado a Autodireção em Fases aplicado para o desenvolvimento de maturidade em alunos iniciantes em Computação",
//     url: "",
//   },
//   {
//     img: "https://s3-alpha-sig.figma.com/img/3424/6d4e/785193ac8503037b69daf2ab80672dcc?Expires=1704067200&Signature=Qo3SeX8~bwrRwlPrgBuzCjJzv5BEmY3yhhfWfSFxyCsPTt~ZLLi8jYu6DT6Q01r0R6i8MMi97Z4YluLq5okQIkDxQiyTN37R~9OnStyD5yRyEmM4imuqZ2oIoYYJ4ba6lP5nJ00frX08dZT79Gt6NxhwQXGMrwiW4Tjw0h9MTlJTRNh~Om6C9YUxCc~Rv43jueDrKmaEG~bNWtvPRrCiOC-wAOhX0F3mBBdus91AE9rdGo-at4HmnyxOlroxPiWbkB2slWMHWMVGNJ9IX0eAjx2iNBswPdX479DXKyzI3~ZBHdSbp0vRlR5badSx9maVSmSR-LwFLEcQm1b8j50RKQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
//     txt: "Modelo de arquitetura de software da plataforma de índice de sustentabilidade Mackenzie-FIESP.",
//     url: "",
//   },
// ];

export const PesquisaHome = async ({ json }) => {
  let currentCardIndex = 0;
  const [currentCard, setCurrentCard] = React.useState(json[0]);

  function handleCardChange(direction) {
    const totalCards = json.length;

    if (direction === "next") {
      currentCardIndex = (currentCardIndex + 1) % totalCards;
    } else if (direction === "previous") {
      currentCardIndex = (currentCardIndex - 1 + totalCards) % totalCards;
    }

    setCurrentCard(json[currentCardIndex]);
  }

  return (
    <div className={styles.main_container}>
      <div className={styles.text}>
        <h2 className={styles.h2}>PESQUISAS</h2>
        <p className={styles.p}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed d
          eiusmodtempor incididunt ut labore et dolore magna aliqua.
        </p>
        <MoreButton />
      </div>
      <div className={styles.content_container}>
        <PesquisaCard img={currentCard.img} txt={currentCard.txt} />
        <div className={styles.arrow_container}>
          <img
            src="left_arrow.png"
            alt="esquerda"
            className={styles.setas}
            onClick={() => handleCardChange("previous")}
          />
          <img
            src="right_arrow.png"
            alt="direita"
            className={styles.setas}
            onClick={() => handleCardChange("next")}
          />
        </div>
      </div>
    </div>
  );
};
