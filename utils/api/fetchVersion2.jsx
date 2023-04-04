import { getSession } from 'next-auth/react';

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const API_TOKEN = process.env.NEXT_PUBLIC_API_TOKEN;

export const getServerSideProps = async (ctx) => {
  const session = await getSession(ctx);
  const user = session.user;
  const jwtToken = session.jwt;

  return {
    props: { user, jwtToken },
  };
};

export default function fetchApi() {
  const get = async function (url, request, parms = null) {
    const getResponse = await fetch(`${API_URL}/api/${url}`, {
      method: request,
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    });
    return getResponse;
  };

  const post = async function (url, request, parms = null) {
    const postResponse = await fetch(`${API_URL}/api/${url}`, {
      method: request,
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${jwtToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(parms),
    });
    return postResponse;
  };

  return { get, post };
}
