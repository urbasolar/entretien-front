import { Button } from '@/components/button/button';
import { Card } from '@/components/card/card';
import { useLogin } from '@/data/loginData';
import { InputsLogin } from '@/modules/inputsLogin/inputsLogin';
import { saveDataLocalStorage } from '@/utils/localStorage';
import { faSpinner } from '@fortawesome/pro-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const LoginPage = () => {
  const navigate = useNavigate();
  const [login, setLogin] = useState({
    email: '',
    password: '',
  });
  const [loginFailed, setLoginFailed] = useState(false);
  const [loginSucceed, setLoginSucceed] = useState(false);

  const handleLogin = () => {
    console.log(login);
    if (
      JSON.stringify(login.email) === JSON.stringify(useLogin.email) &&
      JSON.stringify(login.password) === JSON.stringify(useLogin.password)
    ) {
      setLoginSucceed(true);
      saveDataLocalStorage('user', login);
      if (loginFailed) {
        setLoginFailed(false);
      }
      setTimeout(() => {
        navigate('/');
      }, 2000);
    } else {
      setLoginFailed(true);
    }
  };
  return (
    <div className='w-full h-screen bg-neutral-dark-black items-center justify-between flex flex-col'>
      <div className='h-1/2 content-end'>
        <Card className='bg-neutral-dark-gray flex justify-evenly flex-col p-8'>
          <div>
            <InputsLogin setData={setLogin} data={login} />
          </div>
          <div className='mt-4 flex justify-center flex-col items-center gap-m'>
            <Button
              disabled={!login.email || !login.password}
              onClick={handleLogin}
              text='Se connecter'
              size='md'
            />
            <div>
              <p className='text-red-500'>
                {loginFailed ? 'Échec de connexion' : ' '}
              </p>
              {loginSucceed && (
                <div className='flex flex-col justify-center mt-m gap-m'>
                  <p className='text-green-500'>Connexion réussie</p>
                  <FontAwesomeIcon icon={faSpinner} spin />
                </div>
              )}
            </div>
          </div>
        </Card>
      </div>
      <div className=''>
        <p className='text-gray-50/20'>Urbasolar ©</p>
      </div>
    </div>
  );
};
