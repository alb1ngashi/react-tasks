import React from 'react'
import {Tabs, Tab, TabList, TabPanel} from 'react-tabs'
import TabCarts from './TabCarts'
import './tabsStyle.scss'

import {CartData1,CartData2,CartData3,CartData4,CartData5,CartData6,CartData7,CartData8} from './data'

/**
* @author
* @function TabsPage
**/


export const TabsPage = (props) => {
  return(
    <div className='tabs-container'>
        <Tabs className='home-tab'>
                <TabList>
                    <Tab>Domains</Tab>
                    <Tab>Web Hosting</Tab>
                    <Tab>Dedicated Servers</Tab>
                    <Tab>Virtual Cloud Servers</Tab>
                    <Tab>WordPress Hosting</Tab>
                    <Tab>Email Hosting</Tab>
                    <Tab>VPS Hosting Servers</Tab>
                    <Tab>Free Hosting</Tab>
                </TabList>

                <div className='tab-panel-container'>
                    <TabPanel>
                       {CartData1.map((props) => {
                           return(
                               <TabCarts 
                                    name={props.name}
                                    secondPrice={props.secondPrice}
                                    firstPrice={props.firstPrice}
                               />
                           )
                       })} 
                    </TabPanel>
                    <TabPanel>
                       {CartData2.map((props) => {
                           return(
                               <TabCarts 
                                    name={props.name}
                                    secondPrice={props.secondPrice}
                                    firstPrice={props.firstPrice}
                               />
                           )
                       })} 
                    </TabPanel>
                    <TabPanel>
                       {CartData3.map((props) => {
                           return(
                               <TabCarts 
                                    name={props.name}
                                    secondPrice={props.secondPrice}
                                    firstPrice={props.firstPrice}
                               />
                           )
                       })} 
                    </TabPanel>
                    <TabPanel>
                       {CartData4.map((props) => {
                           return(
                               <TabCarts 
                                    name={props.name}
                                    secondPrice={props.secondPrice}
                                    firstPrice={props.firstPrice}
                               />
                           )
                       })} 
                    </TabPanel>
                    <TabPanel>
                       {CartData5.map((props) => {
                           return(
                               <TabCarts 
                                    name={props.name}
                                    secondPrice={props.secondPrice}
                                    firstPrice={props.firstPrice}
                               />
                           )
                       })} 
                    </TabPanel>
                    <TabPanel>
                       {CartData6.map((props) => {
                           return(
                               <TabCarts 
                                    name={props.name}
                                    secondPrice={props.secondPrice}
                                    firstPrice={props.firstPrice}
                               />
                           )
                       })} 
                    </TabPanel>
                    <TabPanel>
                       {CartData7.map((props) => {
                           return(
                               <TabCarts 
                                    name={props.name}
                                    secondPrice={props.secondPrice}
                                    firstPrice={props.firstPrice}
                               />
                           )
                       })} 
                    </TabPanel>
                    <TabPanel>
                       {CartData8.map((props) => {
                           return(
                               <TabCarts 
                                    name={props.name}
                                    secondPrice={props.secondPrice}
                                    firstPrice={props.firstPrice}
                               />
                           )
                       })} 
                    </TabPanel>
                   
                </div>
            </Tabs>
    </div>
   )

 }

 export default TabsPage;