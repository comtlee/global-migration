import ContactUsForm from '@/components/organisms/ContactUsForm';

const ContactUsSection = () => {
  return (
    <section className='home-section-05'>
      <div className='contents-line-box'>
        <div className='tit-box'>
          <p className='text-capitalize'>Contact Us</p>
          <h1 className='text-pre-line'>
            Adopt SMARTSCORE <br /> to your golf course
          </h1>
        </div>
        <div className='mt-40'>
          <ContactUsForm />
        </div>
      </div>
    </section>
  );
};

export default ContactUsSection;
