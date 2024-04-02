import { Button } from '@/components/button/button';
import { useLogin } from '@/data/loginData';
import { InputsLogin } from '@/modules/inputsLogin/inputsLogin';
import { useState } from 'react';

export const LoginPage = () => {
  const [login, setLogin] = useState({
    email: '',
    password: '',
  });
  const [loginFailed, setLoginFailed] = useState(false);

  const handleLogin = () => {
    if (JSON.stringify(login) === JSON.stringify(useLogin)) {
      console.log('login success');
    } else {
      setLoginFailed(true);
    }
  };
  return (
    <>
      <InputsLogin setData={setLogin} data={login} />
      <div className='mt-4 flex justify-center flex-col items-center'>
        <Button onClick={handleLogin} text='login' size='md' />
        {loginFailed && <p className='text-red-500'>Login failed</p>}
      </div>
    </>
  );
};
