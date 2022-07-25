import { NextPage } from "next"
import Head from "next/head"
import { LoginComponents } from "../components/FormElement"

const SignIn: NextPage = () => {

    return (
      <>
        <Head>
          <title>SignIn</title>
          <meta name="description" content="Further region login" />
        </Head>

        <LoginComponents/>
  
      </>
    )
  }
  
  export default SignIn