import React from 'react'
import RoomFilter from './RoomFilter'
import RoomList from './RoomList'
import Loading from '../components/Loading'
import { withRoomConsumer } from '../context'


function RoomContainer({context}) {
    console.log(context);
    
    const{ loading,sortedRooms,rooms} = context;
    if(loading){
        return <Loading />
    }
    return <React.Fragment>
        <RoomFilter rooms={rooms} />
        <RoomList rooms={sortedRooms} />
    </React.Fragment>

}

export default withRoomConsumer(RoomContainer);

// import React from 'react'
// import RoomFilter from './RoomFilter'
// import RoomList from './RoomList'
// import Loading from '../components/Loading'
// import { RoomConsumer } from '../context'



// export default function RoomContainer() {

//     return (
//         <RoomConsumer>
//             {
//                 (value) => {
//                     const { loading, sortedRooms, rooms } = value;
//                     if(loading){
//                         return  <Loading />;
//                     }
//                     return(
//                         <React.Fragment>
//                             <RoomFilter rooms={rooms}/>
//                             <RoomList rooms={sortedRooms}/>
//                         </React.Fragment>
//                     )
//                 }
//             }
            
//         </RoomConsumer>
//     )
// }
