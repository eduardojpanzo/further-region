import { NextPage } from "next"
import Head from "next/head"
import { SignUpComponents } from "../components/FormElement"

import styles from '../styles/Register.module.scss'

const Register: NextPage = () => {
    return (
      <>
        <Head>
          <title>Cadastro</title>
          <meta name="description" content="Further region Cadastro" />
        </Head>

        <section className={styles.signupContext}>
          <div className={styles.signUpHead}>
            <h2>Olá, crie uma conta no Further<span>Region</span></h2>
            <p>
              Com você logado conseguimos oferecer um serviço melhor e mais personalizado. Navegue logado e ajude no crescimento de muitas comunidades ou zonas
            </p>
          </div>

          <SignUpComponents/>
		    </section>
      </>
    )
  }
  
  export default Register