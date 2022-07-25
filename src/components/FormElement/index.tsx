import { ChangeEvent, FormEvent, useContext, useState } from 'react';
import { FaFacebook, FaUserCircle, FaUserShield } from 'react-icons/fa';
import { AuthContext } from '../../contexts/AuthContext';

import styles from './styles.module.scss'

type LoginValuesType = {
	email:string,
	password:string,
}

type SigninValuesType = {
	name:string,
	genre:'M' | 'F',
	muni:string,
	zone:string,
	date:string,
	email:string,
	tel:string,
	password:string,
	passwordConfirm:string,
}

type ErrorTypes = {
	status:boolean,
	msg:string,
}
type SignError ={
	type:string,
	msg:string,
}
function isEmailValid(email:string) {
	let expression = /^[^@]+@\w+(\.\w+)+\w$/
	return expression.test(email);
}

export function LoginComponents() {
	const [loginValues, setLoginValues] = useState<LoginValuesType>({email:'',password:''});
	const [emailError,setEmailError] = useState<ErrorTypes>({status:false,msg:''})
	const [passwordError,setPasswordError] = useState<ErrorTypes>({status:false,msg:''})
	const [hasError, setHasError] = useState(true)
	const {singIn} = useContext(AuthContext);


	const validate_email = ()=> {
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

	const validate_password = ()=> {
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
	
	const makeValidation = () =>{
		//validaty email
		validate_email();

		//validaty password
		validate_password();
	}

	function handleChange(e:ChangeEvent<HTMLInputElement>){
        setLoginValues({...loginValues,[e.target.name]:e.target.value})
		makeValidation()

    }
	
	async function handleSubmit(e:FormEvent<HTMLFormElement>){
		e.preventDefault();

		makeValidation()

		if (!hasError) {
			await singIn(loginValues);
		}
	}

    return ( 
            <div className={styles.loginContext}>
				<form onSubmit={handleSubmit}>
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
	const [signupError,setSignupError] = useState<SignError>({type:'',msg:''});
	const [hasError, setHasError] = useState(true)

	const [signInValues, setSignInValues] = useState<SigninValuesType>({
		name:'',
		genre:'M',
		muni:'',
		zone:'',
		date:'',
		email:'',
		tel:'',
		password:'',
		passwordConfirm:''
	});

	const validate_text = (name:string,value:string) =>{
		if (!value.trim()) {
			setSignupError({type:name,msg:'Este campo não pode estar vázio'})
			return false;
		}		
		setSignupError({type:'',msg:''})
		return true;
	}

	const validate_email = (email:string)=> {
		if (!isEmailValid(email)) {
			setSignupError({type:'email',msg:'Este email está vazio'})
			return false;
		}
		setSignupError({type:'',msg:''})
		return true;
	}

	const validate_tel = (tel:string)=> {
		if (tel.length < 6) {
			setSignupError({type:'tel',msg:'telefone deve ser maior que 9'})
			return false;
		}
		setSignupError({type:'',msg:''});
		return true;
	}

	const validate_password = (password:string)=> {
		if (password.length < 6) {
			setSignupError({type:'password',msg:'password deve ser maior que 6'});
			return false;
		}
		setSignupError({type:'',msg:''});
		return true;
	}
	
	const validate_passwordConfirm = (confirm:string)=> {
		if (confirm !== signInValues.password) {
			setSignupError({type:'confirm',msg:'Este password não é igual'})
			return false;
		}
		setSignupError({type:'',msg:''});
		return true;
	}
	
	const validation = (name:string,value:string) =>{
		switch (name) {
			case 'name':
			case 'muni':
			case 'zone':
				validate_text(name,value)
				break;
			case 'email':
				validate_email(value)
				break;
			case 'tel':
				validate_tel(value)
				break;
			case 'password':
				validate_password(value)
				break;
			case 'passwordConfirm':
				validate_passwordConfirm(value)
				break;
			default:
				break;
		}
		
	}

	const checkTheValidationHasError = ()=>{
		if (validate_text('name',signInValues.name)) {
			return false;
		}
		if (validate_text('muni',signInValues.muni)) {
			return false;
		}
		if (validate_text('zone',signInValues.zone)) {
			return false;
		}
		if (validate_email(signInValues.email)) {
			return false;
		}
		if (validate_tel(signInValues.tel)) {
			return false;
		}
		if (validate_password(signInValues.password)) {
			return false;
		}
		if (validate_passwordConfirm(signInValues.passwordConfirm)) {
			return false;
		}

		return true
	}

	function handleChange(e:ChangeEvent<HTMLInputElement>){
		validation(e.target.name,e.target.value);
        setSignInValues({...signInValues,[e.target.name]:e.target.value})
    }
	
	function handleSubmit(e:FormEvent<HTMLFormElement>){
		e.preventDefault();

		const hasError = checkTheValidationHasError();
		
		if (hasError) {
			console.log('trying to logIn....');
			console.log(signInValues);
			
		}
	}
	return(
		<div className={styles.signUpContext}>
			<form className="form" onSubmit={handleSubmit}>
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
								<label htmlFor="name">Nome e Sobrenome (Conforme escrito na indetificação)</label>
								<input type="text" className="form-control" name="name" placeholder="Seu nome e sobrenome" onChange={handleChange}/>
								<span>{(signupError.type === 'name') && signupError.msg}</span>
							</div>
							<div className="data">
								<label htmlFor="dataNasc">Data de Nasciimento</label>
								<input type="date" className="form-control" id="dataNasc" required onChange={handleChange}/>
							</div>
							<div className={styles.genre}>
								<p className="label">Gênero</p>
								<label>
									<input type="radio" name="sexo" value="M" checked onChange={handleChange}/>
									Masculino
								</label>
								<label>
									<input type="radio" name="sexo" value="F" onChange={handleChange}/>
									Feminino
								</label>
							</div>
							<div className={styles.municipio}>
								<label htmlFor="muni">Município</label>
								<input type="text" className="form-control" name="muni" placeholder="Digite o Munícipio" onChange={handleChange}/>
								<span>{(signupError.type === 'muni') && signupError.msg}</span>
							</div>
							<div className="zona">
								<label htmlFor="zone">Comunidade ou zona</label>
								<input type="text" className="form-control" name="zone" placeholder="Digite o Munícipio primeiro" onChange={handleChange}/>
								<span>{(signupError.type === 'zone') && signupError.msg}</span>
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
								<label htmlFor="signemail">Email</label>
								<input type="email" className="form-control" id='signemail' name="email" placeholder="Digite seu E-mail"/>
								<span>{(signupError.type === 'email') && signupError.msg}</span>
							</div>
							<div className="acesso-tel">
								<label htmlFor="tel">Telefone</label>
								<input type="tel" className="form-control" id="tel" placeholder="+244 9xx xxx xxx"/>
								<span>{(signupError.type === 'tel') && signupError.msg}</span>
							</div>
							<div className={styles.passwordConfirm}>
								<label htmlFor="password">Crie uma senha</label>
								<input type="password" className="form-control" id="password" placeholder="Digite a sua senha"/>
								<span>{(signupError.type === 'password') && signupError.msg}</span>
							</div>
							<div className={styles.passwordConfirm}>
								<label htmlFor="passwordConfirm">Confirmar senha</label>
								<input type="password" className="form-control" id="passwordConfirm" placeholder="Digite a sua senha novamente"/>
								<span>{(signupError.type === 'confirm') && signupError.msg}</span>
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