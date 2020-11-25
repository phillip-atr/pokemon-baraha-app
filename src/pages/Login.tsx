import React from 'react'
import LoginForm from '../components/auth/login-form';
import logo from '../assets/images/pokeball-logo.png';

export const Login = () => {
  return (
    <div className="flex">
      <div className="w-6/12 flex h-screen justify-center items-center bg-red-500">
        <img className="object-center" src={logo} alt="pokemball" width="300" height="240"/>
      </div>
      <div className="w-6/12">
        <div className="flex h-screen justify-center items-center">
          <LoginForm />
        </div>
      </div>
    </div>
  )
}
