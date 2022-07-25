import { GetServerSideProps } from "next";
import { parseCookies } from "nookies";
import { useContext, useEffect } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { api } from "../services/api";

// import { Container } from './styles';

export default function Dashboard() {
  
  const {user} = useContext(AuthContext);

  useEffect(()=>{
    api.get('/users');
  },[])

  return (
    <div>
        <h1>Dashboard</h1>
        <ul>
          <li>Name:{user?.name}</li>
          <li>email:{user?.email}</li>
          <li>avatar:{user?.avatar_url}</li>
        </ul>
    </div>
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
  
  return{
    props:{}
  }
}