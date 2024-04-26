import Image from 'next/image';
import DummyImage from 'public/images/panduan-kompres-foto/pilih-gambar.jpg';
import React from 'react';

const EventDetail = () => {
  return (
    <div>
      <Image
        src={DummyImage}
        alt='Dummy Image'
        className='object-cover h-[30rem] w-[28rem] rounded-lg'
      />
    </div>
  );
};

export default EventDetail;
