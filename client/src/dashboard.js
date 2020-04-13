import React, { useState, useEffect } from 'react';
import Header from './header';
import '../src/UI.css'
import Graph from './demo';
import { Card } from 'semantic-ui-react';
import Graph2 from './graph2';
import Demo from './header';


const Dashboard = function Dashboard(props) {

    return (

        <>
            <Demo>
                
                        <div className="ui grid ">
                            <div className="ui  two column row wide">
                                <div className="column">
                                <Card.Group centered raised="true">
                                <Card padded="true" color='red' style={{padding:"10px",background:'yellow'}}>
                                <Graph />
                                </Card> 
                                </Card.Group>
                                </div>
                                <div className="column">
                               <Card padded="true" color='red' style={{padding:'10px',background:'yellow'}}>
                               <Graph2/>
                               </Card>
                                </div>
                                
                            </div>
                            <div className="ui one column row wide">


                            </div>

                    
                </div>


            </Demo>
        </>


    )

}

export default Dashboard;