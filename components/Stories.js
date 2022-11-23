import { useEffect, useState } from 'react';
import Story from './Story';
import minifaker from 'minifaker';
import 'minifaker/locales/en';


function Stories() {

    const [storyUsers, setStoryUsers] = useState([]);

    useEffect(() => {
        const storyUsersData = minifaker.array(20, (i) => (
            {
                id: i,
                username: minifaker.username().toLocaleLowerCase(),
                img: `https://i.pravatar.cc/150?img=${i}`,
            }
        ));
        setStoryUsers(storyUsersData);
    },[])

  return (
    <div className='flex bg-white border p-6 space-x-2 mt-8 border-gray-200 overflow-x-scroll scrollbar-none'>
        {storyUsers.map(user => (
            <Story key={user.id} username={user.username} img={user.img}/>
        ))}
    </div>
  )
}

export default Stories