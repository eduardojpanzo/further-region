import { GetServerSideProps } from "next";
import { parseCookies } from "nookies";
import { ZoneCard } from "../../components/ZoneCard";

import styles from '../../styles/zones.module.scss';

export default function Zones() {
  
    return (
      <main>
        <div className={styles.zones_container}>
          <div className={styles.zones_header}>
            <span>Encotre e conhença Aqui!</span>

            <div className={styles.formsearch}></div>
          </div>
          <div className={styles.zones_context}>
            <ZoneCard/>
            <ZoneCard/>
            <ZoneCard/>
            <ZoneCard/>
            <ZoneCard/>
            <ZoneCard/>
            <ZoneCard/>
            <ZoneCard/>
            <ZoneCard/>
            <ZoneCard/>
            <ZoneCard/>
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

    //require the zones and return to the props
    return{
      props:{}
    }
}