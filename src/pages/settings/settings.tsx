import { Button } from '@/components/button/button';
import { useCustomTranslation } from '@/utils/hooks/useCustomTranslation';

export const SettingsPage = () => {
  const { t } = useCustomTranslation();
  const handleClick = () => {
    localStorage.removeItem('user');
    window.location.href = '/login';
  };
  const youtubeVideosIds = [
    'dQw4w9WgXcQ',
    'Skh-2T1Bg_A',
    'ws3WGmINlIg',
    'WUiqozxFCDI',
  ];
  const handleMagicClick = () => {
    const randomIndex = Math.floor(Math.random() * youtubeVideosIds.length);
    window.open(
      `https://www.youtube.com/watch?v=${youtubeVideosIds[randomIndex]}`,
      '_blank'
    );
  };

  return (
    <div className='flex justify-center items-center flex-col h-screen gap-m'>
      <Button text={t('logout')} onClick={handleClick} size='lg' />
      <Button text="Let's go 👀" onClick={handleMagicClick} size='lg' />
    </div>
  );
};
