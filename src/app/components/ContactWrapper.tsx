import React, { FC } from 'react';
import { ContactWrapperStoryblok } from '../../../component-types-sb';
import { storyblokEditable } from '@storyblok/react/rsc';
import ContactCard from './ContactCard';

interface Props {
  blok: ContactWrapperStoryblok;
  mainColor: string;
}

const ContactWrapper: FC<Props> = ({ blok, mainColor }) => {
  const { contactCards, title } = blok;
  return (
    <section className={`bg-${mainColor}`} {...storyblokEditable(blok)}>
      <div className=' container mx-auto py-15 grid grid-cols-2 lg:grid-cols-4'>
        <h2 className='text-white col-span-2 mb-15 text-4xl lg:col-span-4'>
          {title}
        </h2>
        {contactCards?.map((card, index) => (
          <ContactCard key={index} card={card} />
        ))}
      </div>
    </section>
  );
};

export default ContactWrapper;
