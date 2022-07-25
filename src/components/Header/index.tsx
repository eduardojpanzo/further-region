import Link from 'next/link';
import { useState } from 'react';
import styles from './styles.module.scss'

export function Header() {
    const [islogged, setIslogged] = useState(false);
    
    return ( 
        <header className={styles.header}>
            <div className={styles.headerContext}>
                <div className={styles.container}>
                    <h1 className={styles.logo}>
                        <a href="">Further<span>Region</span></a>
                    </h1>

                    <div className={styles.headerRight}>
                        <nav className={styles.menuNav}>
                            <ul>
                                <li><Link href="/">Home</Link></li>
                                <li><Link href="/watch">Watch</Link></li>
                                <li><Link href="/about">About</Link></li>
                            </ul>
                        </nav>

                        <div className={styles.session}>
                            {islogged?(
                                <div className={styles.avatar}>
						            <img src="midia/avatar1.png" alt='avatar-logged'/>
					            </div>
                            ):(
                                <div className={styles.buttons}>
                                    <button className={styles.btn_signin}>
                                        <Link href="/signIn">Login</Link>
                                    </button>
                                    <button className={styles.btn_signup}>
                                        <Link href="/register">Cadastro</Link>
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </header>
     );
}