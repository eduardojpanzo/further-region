import  {NextPage } from 'next';
import Head from 'next/head';
import Footer from '../components/Footer';
import { Header } from '../components/Header';

interface LayoutProps{
    children:NextPage | any;
}
export const Layout = ({children}:LayoutProps) => {
  return(
    <>
         <Head>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <Header/>
        {children}
        <Footer/>
    </>
  );
}