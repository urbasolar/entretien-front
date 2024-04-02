import { Card } from '@/components/card/card';
import { Section } from '@/components/section/section';
import { UserContext } from '@/context';
import { useContext } from 'react';

export const UserInformations = () => {
  const user = useContext(UserContext);
  return (
    <Section title='Informations'>
      <div className='flex flex-row gap-m pt-m'>
        <div className='flex flex-col w-1/2 gap-m'>
          <Card>
            <p>Email</p>
            <p>{user?.email}</p>
          </Card>
          <Card>
            <p>Job</p>
            <p>{user?.job}</p>
          </Card>
          <Card>
            <p>Téléphone</p>
            <p>{user?.phone}</p>
          </Card>
        </div>
        <div className='flex flex-col w-1/2 gap-m'>
          <Card>
            <p>Pays</p>
            <p>{user?.country}</p>
          </Card>
          <Card>
            <p>Ville</p>
            <p>{user?.city}</p>
          </Card>
          <Card>
            <p>Entreprise</p>
            <p>{user?.company}</p>
          </Card>
        </div>
      </div>
    </Section>
  );
};
