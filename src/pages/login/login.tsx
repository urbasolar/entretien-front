import { Button } from '@/components/button/button';
import { InputsLogin } from '@/modules/inputsLogin/inputsLogin';

export const LoginPage = () => {
  return (
    <>
      <InputsLogin />
      <div className='mt-4 flex justify-center'>
        <Button onClick={() => {}} text='login' size='md' />
      </div>
    </>
  );
};
