import React from 'react';
import Slider from '..';
import SliderItem from '../SliderItem';
import Link from 'next/link';

import { fetchAPI } from '@/utils/api/fetch';
import { dataEvents } from '@/utils/api/QueryParams';

export const getServerSideProps = async () => {
  const responceEvents = await fetchAPI(`/events?${dataEvents()}`);
  const events = await responceEvents.json();

  return {
    props: { events },
  };
};

export default function SliderEvents({ data }) {
  return (
    <div className='events__wrapper'>
      <Slider pagination={true} buttons={true}>
        {data.data?.map(({ id, attributes }, index) => (
          <SliderItem key={id}>
            <Link href={`/events`}>
              <img
                className='events__slides'
                src={
                  process.env.NEXT_PUBLIC_API_URL +
                  data.data[index].attributes.poster.data.attributes.url
                }
                alt={'image'}
              />
              <ul className='events__list'>
                <li className='events__description'>
                  <p className='events__date'>
                    {attributes.date.slice(8, 10)} Марта
                  </p>
                  <p className='events__time'>{attributes.time.slice(0, 5)}</p>
                </li>
                <li className='events__description'>
                  <p className='events__item'>{attributes.title}</p>
                  <p className='events__item'>{attributes.author}</p>
                </li>
              </ul>
            </Link>
          </SliderItem>
        ))}
      </Slider>
    </div>
  );
}
