import { Button } from '@/components/atoms/Button';
import Image from 'next/image';

const NewsletterSection = () => {
  return (
    <section className='home-section-06'>
      <div className='contents-line-box'>
        <div className='news-letter'>
          <div className='tit-box'>
            <p className='text-capitalize'>newsletter</p>
            <h1 className='text-pre-line'>
              Subscribe newsletter for <br />
              SMARTSCORE Updates!
            </h1>
          </div>
          <div className='img-box'>
            <Image
              src='https://image.smartscore.kr/smartscore_gloabl/images/img_newsletter.png'
              width={'340'}
              height={'352'}
              alt='smartscore'
            />
          </div>
          <div className='btn-box'>
            <Button variant='white' className='hp-60'>
              subscribe
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
