import React, { Component } from 'react';
import items from './data';


const RoomContext = React.createContext();

class RoomProvider extends Component {
    state={
        featuredRooms:[],
        rooms:[],
        sortedRooms:[],
        loading:true
    };

    componentDidMount(){
        let rooms = this.formatData(items);
        let featuredRooms = rooms.filter( room => room.featured === true);
        this.setState({
            rooms,featuredRooms,sortedRooms:rooms,loading:false
        });
    }

    formatData(items){
        let tempItems = items.map( item => {
            let id = item.sys.id;
            let images = item.fields.images.map(image => {
                return image.fields.file.url;
            });
            //console.log(images);
            let room = {...item.fields,images,id};
            //console.log(room);
            return room;
        })
        return tempItems;
    }

    getRoom = (slug) =>{
        let tempRooms = [...this.state.rooms];
        const room = tempRooms.find( room => room.slug === slug);
        return room;
    }
    render() {
        return (
            <RoomContext.Provider value={{...this.state,getRoom:this.getRoom}}>
                {this.props.children}
            </RoomContext.Provider>
        )
    }
}

const RoomConsumer = RoomContext.Consumer;

export { RoomConsumer, RoomProvider, RoomContext };
