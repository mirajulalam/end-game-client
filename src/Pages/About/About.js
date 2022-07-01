import React from 'react';
import images from '../../assets/profile-pic.png';
const About = () => {
    return (
        <div class="hero min-h-screen">
  <div class="hero-content flex-col lg:flex-row">
    <img src={images} class="max-w-sm w-full rounded-lg shadow-2xl" />
    <div>
      <h1 class="text-5xl font-bold">Name: Mirajul Alam Alif</h1>
      <p class="py-2"> <span className='font-bold'>Email:</span> alifmirajulalam@gmail.com</p>
      <p class="py-2"><span className='font-bold'>Education:</span> inter 1st year</p>
      <p class="py-2"><span className='font-bold'>Web development Skill:</span> HTML,CSS,BootStrape,Tailwind,JavaScript,Es6,
      Firebase-Authentication,React,React Router,Nodejs,Express,Stripe,Mongodb</p>
      <p class="py-2">My name is mirajul alam alif. I am a junior web developer.I love programming I went to a full stack developer.and I am learning web development in 1 year.and I am learning in web development with programming-hero jhankar mahamub sir.</p>
    </div>
  </div>
</div>    
    );
};

export default About;