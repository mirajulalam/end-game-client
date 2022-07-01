import React from 'react';
import images from '../../assets/profile-pic.png';
const About = () => {
    return (
        <div className='justify-center'>
            <div className="hero min-h-screen bg-base-100">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={images} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-4xl font-bold mb-4"><span className='font-bold'>Name:</span> Mirajul Alam Alif</h1>
                        <p className='mb-4 text-2xl'><span className='font-bold'>Email:</span> alifmirajulalam@gmail.com</p>
                        <p className='mb-4 text-2xl'><span className='font-bold'>Education:</span> inter 1st year</p>
                        <p className='mb-4 text-xl'><span className='font-bold'>Web development Skill:</span> HTML,CSS,BootStrape,Tailwind,JavaScript,Es6,Firebase Authentication,React,React Router,Nodejs,Express,Stripe,Mongodb</p>
                        <p>My name is mirajul alam alif. I am a junior web developer.I love programming I went to a full stack developer.and I am learning web development in 1 year.and I am learning in web development with programming-hero jhankar mahamub sir.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;