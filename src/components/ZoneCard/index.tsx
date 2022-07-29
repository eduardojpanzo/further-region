import Link from 'next/link';
import styles from './styles.module.scss'


export const ZoneCard = () => {
    return ( 
        <div className={styles.zone_Card}>
            <h4>{`Name of Zone`}</h4>
            <p>
                <span>Município:<em>Viana</em></span>
                <span>Provícia:<em>Luanda</em></span>
            </p>
            <div className={styles.card_actions}>
                <Link href={`/zones/${2}`}>
                    Ver Com detalhes..
                </Link>
            </div>
        </div>
     );
}