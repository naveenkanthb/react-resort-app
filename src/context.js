import React, { Component } from 'react';
import items from './data';


const RoomContext = React.createContext();

class RoomProvider extends Component {
    state={
        featuredRooms:[],
        rooms:[],
        sortedRooms:[],
        loading:true,
        type:'all',
        capacity:0,
        price:0,
        minPrice:0,
        maxPrice:0,
        minSize:0,
        maxSize:0,
        breakfast:false,
        pets:false
    };

    componentDidMount(){
        let rooms = this.formatData(items);
        let featuredRooms = rooms.filter( room => room.featured === true);
        let maxPrice = Math.max(...rooms.map( item => item.price ));
        let maxSize = Math.max(...rooms.map( item => item.size ));
        this.setState({
            rooms,
            featuredRooms,
            sortedRooms:rooms,
            loading:false,
            price:maxPrice,
            maxPrice,
            maxSize
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

    handleChange = (e) => {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = e.target.name;
        this.setState({
            [name]:value
        },this.filterRooms)
    }


    filterRooms = () => {
        let { rooms,price,type,capacity,minSize,maxSize,breakfast,pets } = this.state;
        let tempRooms = [...rooms];
        capacity = parseInt(capacity);
        price = parseInt(price);
        if(type !== 'all'){
            tempRooms = tempRooms.filter( room => room.type === type);
        }
        if(capacity !== 1){
            tempRooms = tempRooms.filter(room => room.capacity >= capacity);
        }

        tempRooms = tempRooms.filter(room => room.price <= price);

        tempRooms = tempRooms.filter( room => room.size >= minSize && room.size <= maxSize);

        if(breakfast){
            tempRooms = tempRooms.filter( room => room.breakfast === true);
        }

        if(pets){
            tempRooms = tempRooms.filter( room => room.pets === true);
        }

        this.setState({
            sortedRooms: tempRooms
        });
    }
    render() {
        return (
            <RoomContext.Provider value={{...this.state,getRoom:this.getRoom,handleChange:this.handleChange}}>
                {this.props.children}
            </RoomContext.Provider>
        )
    }
}

const RoomConsumer = RoomContext.Consumer;

export function withRoomConsumer (Component){
    return function ConsumerWrapper(props){
        return <RoomConsumer>
            { value => {
                return <Component {...props} context={value} />;
                }
            }
        </RoomConsumer>
    }
}

export { RoomConsumer, RoomProvider, RoomContext };
