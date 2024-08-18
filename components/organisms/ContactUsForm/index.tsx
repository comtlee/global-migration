'use client';
import React, { useState } from 'react';
import InputField from '@/components/molecules/InputField';
import PhoneInputField from '@/components/molecules/PhoneInputField';
import CheckBox from '@/components/atoms/CheckBox';
import { Button } from '@/components/atoms/Button';

const ContactUsForm = () => {
  const [clubName, setClubName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');

  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <form className='contactus' onSubmit={handleSubmit}>
      <InputField
        id='Golf Course Name'
        label='Golf Course Name'
        required
        value={clubName}
        onChange={e => setClubName(e.target.value)}
      />
      <div className='dp-f form-group'>
        <InputField
          className='flex-1'
          id='First Name'
          label='First Name'
          required
          row
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
        />
        <InputField
          className='flex-1'
          id='Last Name'
          label='Last Name'
          required
          row
          value={lastName}
          onChange={e => setLastName(e.target.value)}
        />
      </div>
      <div className='form-group dp-f'>
        <InputField
          className='flex-1'
          id='Position'
          label='Country Select'
          required
          row
        />
        <PhoneInputField
          className='flex-2'
          value={phone}
          onChange={e => setPhone(e.target.value)}
          label='Country Number'
          required
        />
      </div>
      <InputField
        className='mt-30'
        id='e-mail'
        label='E-mail Address'
        required
      />
      <div className='contactus-Agreement mt-30'>
        <CheckBox
          checked={false}
          onChange={() => {}}
          id='required'
          label='[Required] Personal Information Agreement'
        />
      </div>
      <Button className='size-100 hp-69 mt-40' disabled>
        Inquire Now
      </Button>
    </form>
  );
};

export default ContactUsForm;
