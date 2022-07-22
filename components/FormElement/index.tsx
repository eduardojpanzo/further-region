import { ChangeEvent, FormEvent, useState } from 'react';
import { FaFacebook, FaUserCircle, FaUserShield } from 'react-icons/fa';
import styles from './styles.module.scss'

type ValuesType = {
	email:string,
	password:string,
}

type ErrorTypes = {
	status:boolean,
	msg:string,
}

export function LoginComponents() {
	const [emailError,setEmailError] = useState<ErrorTypes>({status:false,msg:''})
	const [passwordError,setPasswordError] = useState<ErrorTypes>({status:false,msg:''})
	const [hasError, setHasError] = useState(true)

	const [loginValues, setLoginValues] = useState<ValuesType>({email:'',password:''});
	
	function handleChange(e:ChangeEvent<HTMLInputElement>){
        setLoginValues({...loginValues,[e.target.name]:e.target.value})

    }
	
	function submit(e:FormEvent<HTMLFormElement>){
		e.preventDefault();

		//validaty email
		validate_email();

		//validaty password
		validate_password();

		if (!hasError) {
			console.log('trying to logIn....');
		}
	}

	function validate_email() {
		if (loginValues.email.trim() === '') {
			setHasError(true)
			setEmailError({status:true,msg:'vazio email'})
		} else if (!isEmailValid(loginValues.email)) {
			setHasError(true)
			setEmailError({status:true,msg:'email incorreto'})
		} else{
			setHasError(false);
			setEmailError({status:false,msg:''})
		}
		
	}

	function validate_password() {
		if (loginValues.password.trim() === '') {
			setHasError(true);
			setPasswordError({status:true,msg:'vazio password'});
		} else if(loginValues.password.length < 6){
			setHasError(true);
			setPasswordError({status:true,msg:'curta de mais password, pelo meno 6'});
		}else{
			setHasError(false);
			setPasswordError({status:false,msg:''});
		}
	}

	function isEmailValid(email:string) {
		let expression = /^[^@]+@\w+(\.\w+)+\w$/
		return expression.test(email);
	  }

	
    return ( 
            <div className={styles.loginContext}>
				<form onSubmit={submit}>
					<span>Fazer Login Com</span>
					<div className={styles.ghost}>
						<button className={styles.btn_ghost}>
							<img src="./google.png"/>
							Google
						</button>
						<button className={styles.btn_ghost}>
							<FaFacebook/>
							Facebook
						</button>
					</div>

					<small>ou</small>

					<div className={styles.formControl}>
						<label htmlFor="email">Login</label>
						<input type="text" name="email" placeholder="Seu e-mail ou usuário" onChange={handleChange} required={false}/>
						<span>{emailError.status && emailError.msg}</span>
					</div>
					
					<div className={styles.formControl}>
						<label htmlFor="password">Senha</label>
						<input type="password" name="password" placeholder="Sua senha de acesso" onChange={handleChange} required={false}/>
						<span>{passwordError.status && passwordError.msg}</span>
					</div>

					<div className={styles.checkboxContainer}>
						<label htmlFor="remember">
							<input type="checkbox" name="remember"/>
							Lembre-me
						</label>

						<a href="#">Esqueci minha senha</a>
					</div>

					<button className={styles.btn_login}>Entrar</button>
				</form>

				<p>
					Não Tenho uma conta?
					<a href="/register">Cadastre-se aqui</a>
				</p>
			</div>
     );
}

export function SignUpComponents(){
	return(
		<div className={styles.signUpContext}>
			<form className="form">
				<div className={styles.formGhost}>
					<div className={styles.ghostText}>
						Preencha o formulário abaixo
					</div>
					<small>ou</small>
					<div className={styles.ghostBtn}>
						<FaFacebook/>
						Continuar com Facebook
					</div>
				</div>

				<div className={styles.formSignup}>
					<div className="dados-pessoais">
						<h3>
							<FaUserCircle/>
							Dados Pessoais
						</h3>
						<div className={styles.formPerson}>
							<div className={styles.name}>
								<label htmlFor="nome">Nome e Sobrenome (Conforme escrito na indetificação)</label>
								<input type="text" className="form-control" id="nome" placeholder="Seu nome e sobrenome"/>
							</div>
							<div className="data">
								<label htmlFor="dataNasc">Data de Nasciimento</label>
								<input type="date" className="form-control" id="dataNasc" required/>
							</div>
							<div className={styles.genre}>
								<p className="label">Gênero</p>
								<label>
									<input type="radio" name="sexo" value="masc" checked/>
									Masculino
								</label>
								<label>
									<input type="radio" name="sexo" value="femi"/>
									Feminino
								</label>
							</div>
							<div className={styles.municipio}>
								<label htmlFor="muni">Município</label>
								<input type="text" className="form-control" id="muni" placeholder="Digite o Munícipio"/>
							</div>
							<div className="zona">
								<label htmlFor="zona">Comunidade ou zona</label>
								<input type="text" className="form-control" readOnly id="zona" placeholder="Digite o Munícipio primeiro"/>
							</div>
						</div>
					</div>

					<div className="dados-acesso">
						<h3>
							<FaUserShield/>
							Dados de acesso
						</h3>	
						<div className={styles.formAccess}>
							<div className="acesso-email">
								<label htmlFor="email">Email</label>
								<input type="email" className="form-control" id="email" placeholder="Digite seu E-mail"/>
							</div>
							<div className="acesso-tele">
								<label htmlFor="tele">Telefone</label>
								<input type="tel" className="form-control" id="tele" placeholder="+244 9xx xxx xxx"/>
							</div>
							<div className={styles.passwordConfirm}>
								<label htmlFor="senha">Crie uma senha</label>
								<input type="password" className="form-control" id="senha" placeholder="Digite a sua senha"/>
							</div>
							<div className={styles.passwordConfirm}>
								<label htmlFor="conSenha">Confirmar senha</label>
								<input type="password" className="form-control" id="conSenha" placeholder="Digite a sua senha novamente"/>
							</div>
						</div>
					</div>

					<div className={styles.btnSignup}>
						<button type="submit">Junte-se</button>
					</div>
				</div>
			</form>
		</div>
		
	)
}