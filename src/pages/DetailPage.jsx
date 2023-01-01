import React from 'react'
import { useSelector } from 'react-redux';
import Likes from '../icons/Likes';
import Photos from '../icons/Photos';
import PinLocation from '../icons/PinLocation';
import Instagram from '../icons/Instagram';
import Twitter from '../icons/Twitter';
import UserCard from '../icons/UserCard';
import Bio from '../icons/Bio';


const DetailPage = () => {
  const {detailArr} = useSelector((state) => state);

  return (
    <div className='bg-gray-300 flex justify-center items-center h-screen'>
      {detailArr.map((val) => {
        return (
          <div
            key={val.id}
            className='bg-white w-auto h-auto px-6 py-4 flex flex-row rounded-md items-center shadow-md shadow-gray-900'>
            <img src={val.urls.small} alt={val.alt_description} className='w-[400px] h-[400px] object-cover mr-4 rounded-lg'/>
            <div className='flex flex-col'>
              <div className='w-[500px] h-auto'>
                <div className='w-[500px] h-auto'>
                  <p className='text-black text-sm font-extrabold text-center mb-6'>{val.description}</p>
                </div>
              </div>
              <UserCard
                imgUser={val.user.profile_image.small}
                nameUser={val.user.name}
                portfolio={val.user.social.portfolio_url}
              />
              <Bio bioUser={val.user.bio} />
              <div className='flex justify-center flex-wrap mt-6 mb-3 space-x-3'>
              <Twitter nameTwitter={val.user.twitter_username} />
              <Instagram nameIg={val.user.social.instagram_username} />
              <PinLocation location={val.user.location} />
              </div>
              <div className='flex flex-wrap justify-around'>
              <Likes countLikes={val.user.total_likes} />
              <Photos photos={val.user.total_photos} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default DetailPage;