import Input from '@/components/input/input';

export const InputsLogin = () => {
  return (
    <div className='flex flex-col items-center justify-center h-full'>
      <h1 className='text-3xl font-semibold'>Login</h1>
      <div className='flex flex-col space-y-4 mt-4'>
        <Input type='text' placeholder='Username' />
        <Input type='password' placeholder='Password' />
      </div>
    </div>
  );
};
