import React, { Component } from 'react';
import Title from './Title';
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';

export default class Services extends Component {
    state={
        services:[
            {
                icon:<FaCocktail />,
                title:"free cocktails",
                info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, dignissimos?"
            },
            {
                icon:<FaHiking />,
                title:"Nonstop hiking",
                info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, dignissimos?"
            },
            {
                icon:<FaShuttleVan />,
                title:"free shuttle",
                info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, dignissimos?"
            },
            {
                icon:<FaBeer />,
                title:"Strongest Beer",
                info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, dignissimos?"
            }
        ]
    }
    render() {
        return (
            <section>
                <Title title="services" />
                <div className="services-center">
                    {this.state.services.map((item,index) => {
                        return (
                            <artice key={index} className="services">
                                <span>{item.icon}</span>
                                <h6>{item.title}</h6>
                                <p>{item.info}</p>
                            </artice>);
                    })}
                </div>
            </section>
        )
    }
}
