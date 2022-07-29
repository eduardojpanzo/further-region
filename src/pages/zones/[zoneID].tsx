import { GetServerSideProps } from "next";
import { parseCookies } from "nookies";
import styles from '../../styles/zone.module.scss';

export default function Zone() {
    return (
      <main>
        <div className={styles.zone_container}>
          <div className={styles.zone_header}>
            <div>
              <h2>Setores</h2>
              <ul>
                <li className={styles.active}>Educação</li>
                <li>Saúde</li>
                <li>Emprego e desenvolvimento</li>
                <li>Segurança e criminalidade</li>
              </ul>
            </div>
          </div>

          <div className={styles.zone_context}>
            <div className={styles.datas}>
              <div className={styles.title}>
                Gráficos
              </div>
              <div className={styles.infoGraf}>
                <img src="/graf.png" alt="graficon" />
              </div>
            </div>

            <div className={styles.datas}>
              <div className={styles.title}>
                Mais Informação
              </div>
              <div className={styles.otherInfo}>
                <div className={styles.data}>
                 <p>Nº Escolas: <em>4</em></p>
                  <ul>
                    <li>Boa Ventura</li>
                    <li>Futuro Feliz</li>
                    <li>Complexo 403</li>
                    <li>Bom Saber</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
}

export const getServerSideProps:GetServerSideProps = async (ctx) =>{
    const {['FR_token']:token} = parseCookies(ctx);
  
    if (!token) {
      return{
        redirect:{
          destination: '/signIn',
          permanent: false,
        }
      }
    }

    //require the one zone with id from parms of request
    return{
      props:{}
    }
}

{/* <h2>Seja bem vindo! a </h2>
          <p>Apresetamos aqui os dados para conheceres melhor Esta Zona, faça as suas escolha!</p> */}