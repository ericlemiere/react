import React from 'react'
import { BsInstagram, BsGithub } from 'react-icons/bs';
import { FaMusic } from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
            <BsGithub />
        </div>
        <div>
            <BsInstagram />
        </div>
        <div>
            <FaMusic />
        </div>
    </div>
  )
}

export default SocialMedia