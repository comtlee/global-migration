import RedirectButtonsSection from '@/components/templates/ContactUs/RedirectButtonsSection';

type Props = {};

const ContactUs = (props: Props) => {
  return (
    <div className='contents'>
      <div className='common-page-visual-area contactus'>
        <div className='txt-box'>
          <span className='text-uppercase'>CONTACT US</span>
          <h1 className='text-pre-line'>Questions? We are here to help!</h1>
          <p className='text-pre-line'>
            We will be in touch within 2-3 working days after inquiry
            submission. The more information you provide, the more precise the
            consultation can be provided.
          </p>
        </div>
      </div>

      <RedirectButtonsSection />
    </div>
  );
};

export default ContactUs;
