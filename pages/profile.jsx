import { signOut } from 'next-auth/react';
import { authOptions } from 'pages/api/auth/[...nextauth]';
import { getServerSession } from 'next-auth/next';
import { useRouter } from 'next/router';
import { useState } from 'react';

export const getServerSideProps = async (context) => {
  const sessionServer = await getServerSession(
    context.req,
    context.res,
    authOptions
  );

  if (!sessionServer) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {
      sessionServer,
    },
  };
};

const profile = ({ sessionServer }) => {
  const router = useRouter();
  const [user] = useState(sessionServer?.user);

  const handle = async () => {
    const { url } = await signOut({
      redirect: false,
      callbackUrl: '/',
    });

    router.push(url);
  };

  const menuItems = [
    { id: 1, label: 'Аккаунт', link: '/account' },
    { id: 2, label: 'Мои подборки / Загрузить', link: '/my-playlists' },
    { id: 3, label: 'Настройки', link: '/settings' },
  ];

  return (
    <div className='container'>
      <div className='profile'>
        <div className='profile__menu'>
          {menuItems.map(({ id, label, link }) => {
            return (
              <ul key={id}>
                <a href={link}>
                  <li>{label}</li>
                </a>
              </ul>
            );
          })}
          <button onClick={handle}>Выход</button>
        </div>
        <div className='profile__content'>
          <ul>
            <li>Имя: {user.name ? user.name : 'Не указано'}</li>
            <li>Username: {user.username}</li>
            <li>Email: {user.email}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default profile;
