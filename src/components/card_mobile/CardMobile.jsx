import styles from "./CardMobile.module.css";

export const CardMobile = () => {
  return (
    <div className={styles.main}>
      <div className={styles.cardForm}>
        <div className={styles.text}>
          <h1 className={styles.h1}>Entre em contato conosco</h1>
          <p className={styles.p}>Como podemos te ajudar?</p>
        </div>
        <form className={styles.form}>
          <div>
            <label htmlFor="nome" className={styles.label}></label>
            <input
              type="text"
              id="nome"
              name="nome"
              placeholder="Insira seu nome"
              className={styles.input}
            />
          </div>
          <br></br>
          <div>
            <label htmlFor="email" className={styles.label}></label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Insira seu endereço de e-mail"
              className={styles.input}
            />
          </div>
          <br></br>
          <div>
            <label htmlFor="question" className={styles.label}></label>
            <textarea
              className={styles.textarea}
              name="question"
              id="question"
              cols="30"
              rows="10"
              placeholder="Escreva a sua mensagem"
            ></textarea>
          </div>
          <br></br>
          <div className={styles.divButton}>
            <div className={styles.divButton}>
              <button type="submit" className={styles.button}>
                Envie
              </button>
            </div>
          </div>
          <br></br>
        </form>
      </div>
      <div className={styles.contact}>
        <div className={styles.divs}>
          <img src="/Localização.png" alt="Endereço" />
          <p className={styles.p}>
            R. da Consolação, 930 - Consolação, São Paulo - SP
          </p>
        </div>
        <div className={styles.divs}>
          <img src="/Email.png" alt="E-mail" />
          <p className={styles.p}>fci@mackenzie.br</p>
        </div>
        <div className={styles.divs}>
          <img src="/Telefone.png" alt="Telefone" />
          <p className={styles.p}>(11) 2766-7764</p>
        </div>
        <img src="/contact.svg" alt="contato" className={styles.contactImage} />
      </div>
    </div>
  );
};
