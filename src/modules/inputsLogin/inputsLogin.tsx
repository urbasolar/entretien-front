import Input from '@/components/input/input';
import { Dispatch, SetStateAction } from 'react';

export const InputsLogin = (props: {
  data: {
    email: string;
    password: string;
  };
  setData: Dispatch<
    SetStateAction<{
      email: string;
      password: string;
    }>
  >;
}) => {
  const { setData, data } = props;
  return (
    <div className='flex flex-col items-center justify-center h-full'>
      <h1 className='text-3xl font-semibold text-white'>Connexion</h1>
      <div className='flex flex-col space-y-4 mt-4'>
        <Input
          type='text'
          placeholder='Username'
          currentValue={(value) =>
            setData((prevState) => ({ ...prevState, email: value as string }))
          }
          value={data.email}
          name='email'
        />
        <Input
          type='password'
          placeholder='Password'
          currentValue={(value) =>
            setData((prevState) => ({
              ...prevState,
              password: value as string,
            }))
          }
          value={data.password}
          name='password'
        />
      </div>
    </div>
  );
};
