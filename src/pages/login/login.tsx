import { Button } from '@/components/button/button';
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
    if (JSON.stringify(login) === JSON.stringify(useLogin)) {
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
    <>
      <InputsLogin setData={setLogin} data={login} />
      <div className='mt-4 flex justify-center flex-col items-center'>
        <Button
          disabled={!login.email || !login.password}
          onClick={handleLogin}
          text='login'
          size='md'
        />
        {loginFailed && <p className='text-red-500'>Login failed</p>}
        {loginSucceed && (
          <div className='flex flex-col justify-center mt-m gap-m'>
            <p className='text-green-500'>Login succeed</p>
            <FontAwesomeIcon icon={faSpinner} spin />
          </div>
        )}
      </div>
    </>
  );
};
