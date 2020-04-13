import React from 'react';
import defaultBcg from '../images/room-1.jpeg';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import { RoomContext } from '../context';

export default class SingleRoom extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            slug:this.props.match.params.slug,
            defaultBcg
        }
    }

    static contextType = RoomContext;
    render(){
        const {getRoom} = this.context;
        const room = getRoom(this.state.slug);
        console.log(room);
        return (
            
            <div>
                hello from singleroom
            </div>
        )
    }
}
