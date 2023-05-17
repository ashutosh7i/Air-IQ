import './Working.css';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import React from 'react'

function Working() {
  return (
    <>
    <VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
  >
    <h3 className="vertical-timeline-element-title">Exploring the role of gas sensors (MQ135, MQ5, MQ07) in measuring air quality and detecting hazardous gases</h3>
    <p>
    Sensors in the device, including the MQ135, MQ5, and MQ07, measure the concentration of various gases in the air, such as those released during waste decomposition. These gases include ammonia, alcohol, benzene, smoke, carbon dioxide, carbon monoxide, LPG, natural gas, coal gas, etc.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
  >
    <h3 className="vertical-timeline-element-title">Efficient Data Transfer: Sending Sensor Data to a Server via API with Device's CPU and RAM</h3>
    <p>
     The device's CPU and RAM allow the sensor data to be sent to a server through API.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
  >
    <h3 className="vertical-timeline-element-title">Backend Response Generation for Frontend Processing</h3>
    <p>
    The back-end then generates a response for the front-end to process further.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
  >
    <h3 className="vertical-timeline-element-title">Front-end Data Visualization with Backend API Data</h3>
    <p>
    The front-end visualises data using API data provided by the backend.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
  >
    <h3 className="vertical-timeline-element-title">Managing Adverse Conditions with Real-time and Historical Data on Website</h3>
    <p>
    The website records both real-time and previous data so that appropriate actions can be taken to deal with the adverse conditions.
    </p>
   </VerticalTimelineElement>
  
   </VerticalTimeline>
    </>
  );
}

export default Working;

