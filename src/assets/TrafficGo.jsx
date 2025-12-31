import { Container } from "react-bootstrap"
import TabsExample from "./components/tabs"

import one from './images/1.jpeg';
import two from './images/2.jpeg';
import three from './images/3.jpeg';
import four from './images/4.jpeg';
import five from './images/5.jpeg';
import six from './images/6.jpeg';
import seven from './images/7.jpeg';
import eight from './images/8.png';
import nine from './images/9.png';
import ten from './images/10.png';
import eleven from './images/11.jpeg';
import twelve from './images/12.jpeg';
import thirteen from './images/13.jpeg';
import fourteen from './images/14.jpeg';
import fifteen from './images/15.jpeg';
import sixteen from './images/16.jpeg';

import uno from './images/uno.mp4';
import dos from './images/dos.mp4';
import tres from './images/tres.mp4';
import quatro from './images/quatro.mp4';
import cinco from './images/cinco.mp4';
import seis from './images/seis.jpeg';
import siete from './images/siete.jpeg';
// import ocho from './images/ocho.jpeg';
import nueve from './images/nueve.jpeg';
import diez from './images/dies.jpeg';
import once from './images/once.jpeg';

export default function trafficProject () {
    
    const overviewContent = (
        <article>
            <div className="project-img">
                <video 
                    loop 
                    muted 
                    playsInline 
                    className="project-image"
                    onMouseEnter={(e) => e.target.play()}
                    onMouseLeave={(e) => { e.target.pause(); e.target.currentTime = 0; }}
                >
                    <source src={uno} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <video 
                    loop 
                    muted 
                    playsInline 
                    className="project-image"
                    onMouseEnter={(e) => e.target.play()}
                    onMouseLeave={(e) => { e.target.pause(); e.target.currentTime = 0; }}
                >
                    <source src={cinco} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <video 
                    loop 
                    muted 
                    playsInline 
                    className="project-image"
                    onMouseEnter={(e) => e.target.play()}
                    onMouseLeave={(e) => { e.target.pause(); e.target.currentTime = 0; }}
                >
                    <source src={dos} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="project-img">
                <video 
                    loop 
                    muted 
                    playsInline 
                    className="project-image"
                    onMouseEnter={(e) => e.target.play()}
                    onMouseLeave={(e) => { e.target.pause(); e.target.currentTime = 0; }}
                >
                    <source src={quatro} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <video 
                    loop 
                    muted 
                    playsInline 
                    className="project-image"
                    onMouseEnter={(e) => e.target.play()}
                    onMouseLeave={(e) => { e.target.pause(); e.target.currentTime = 0; }}
                >
                    <source src={tres} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                </div>
            </div>
            <h2 className="project-title">Purpose</h2>
            <div className="project-text">
                <p>The purpose of Traffic GO is to provide traffic analytics and alternative routes for a user depending on their desired destination and location. The application pulls from Google Maps API and other traffic data sources to offer real-time updates and route optimization. It gives users the option of saving recommended routes for later retrieval with incident reporting capabilities.</p>
            </div>

            <h2 className="project-title">Scope</h2>
            <div className="project-text">
                <p><strong>In scope:</strong></p>
                <ul>
                    <li>The system will provide a mobile-based platform for users to access traffic data and route recommendations.</li>
                    <li>The system will integrate with existing traffic data sources and mapping services to provide accurate and up-to-date information.</li>
                    <li>The system will offer route optimization based on real-time traffic conditions and user preferences.</li>
                    <li>The system will allow users to save and retrieve recommended routes for future use.</li>
                    <li>The system will provide incident reporting features for users to report traffic issues.</li>
                </ul>
                <p><strong>Out of scope:</strong></p>
                <ul>
                    <li>The system will not provide traffic data for locations outside of the supported regions.</li>
                    <li>The system will not offer advanced navigation features such as voice-guided directions or lane assistance.</li>
                    <li>The system will not support integration with third-party navigation applications.</li>
                    <li> The system does not provide alternate routes such as public transit or ridesharing.</li>
                </ul>
            </div>

            <h2 className="project-title">Definitions, Acronyms, and Abbreviations</h2>
            <div className="project-text">
                <ul>
                    <li><strong>API:</strong> Application Programming Interface</li>
                    <li><strong>UI:</strong> User Interface</li>
                    <li><strong>UX:</strong> User Experience</li>
                    <li><strong>GPS:</strong> Global Positioning System</li>
                </ul>
            </div>

            <h2 className="project-title">References</h2>
            <div className="project-text">
                <ul>
                    <li>Google Maps API Documentation: <a href="https://developers.google.com/maps/documentation" target="_blank" rel="noopener noreferrer">https://developers.google.com/maps/documentation</a></li>
                    <li>WireFraming Tools: <a href="https://www.figma.com/design/uHOdnqzdtoTLiDsbcJBbMo/TrafficGo-WireFrames?node-id=0-1&t=SAOhRUEEAm5nbnDb-1" target="_blank" rel="noopener noreferrer">Figma</a></li>   
                    <li>UX Framework: React Native</li>      
                </ul>
            </div>

            <h2 className="project-title">Product Perspective</h2>
            <div className="project-text">
                <p>Traffic GO is a standalone mobile application that integrates with existing traffic data sources and mapping services. It provides users with real-time traffic analytics and route optimization features to help them navigate congested areas more efficiently. The application is designed to be user-friendly and accessible, with a focus on providing accurate and up-to-date information to users.</p>
            </div>

            <h2 className="project-title">Product Functions</h2>
            <div className="project-text">
                <ul>
                    <li>Real-time traffic data retrieval and display</li>
                    <li>Route optimization based on traffic conditions and user preferences</li>
                    <li>Saved routes management for future retrieval</li>
                    <li>Incident reporting features for users to report traffic issues</li>
                    <li>User authentication and profile management</li>
                </ul>
            </div>

            <h2 className="project-title">User Characteristics</h2>
            <div className="project-text">
                <p>The target users for Traffic GO are commuters and drivers who frequently encounter traffic congestion and delays. Users may vary in age, technical proficiency, and familiarity with mobile applications. The application is designed to be intuitive and user-friendly, catering to a wide range of users.</p>
            </div>

            <h2 className="project-title">Constraints</h2>
            <div className="project-text">
                <ul>
                    <li>Dependence on third-party traffic data sources and mapping services</li>
                    <li>Mobile platform limitations, such as screen size and processing power</li>
                    <li>Data privacy and security considerations for user information</li>
                </ul>
            </div>

            <h2 className="project-title">Functional Requirements</h2>
            <div className="project-text">
                <ul>
                    <li>The system shall retrieve real-time traffic data from integrated data sources.</li>
                    <li>The system shall provide route optimization based on current traffic conditions and user preferences.</li>
                    <li>The system shall allow users to save and retrieve recommended routes.</li>
                    <li>The system shall provide incident reporting features for users to report traffic issues.</li>
                    <li>The system shall support user authentication and profile management.</li>
                </ul>
            </div>

            <h2 className="project-title">Non-Functional Requirements</h2>
            <div className="project-text">
                <ul>
                    <li>The system shall ensure data privacy and security for user information.</li>
                    <li>The system shall provide a responsive and user-friendly interface.</li>
                    <li>The system shall be compatible with major mobile platforms (iOS and Android).</li>
                    <li>The system shall handle high volumes of traffic data efficiently.</li>
                </ul>
            </div>

            <h2 className="project-title">Assumptions and Dependencies</h2>
            <div className="project-text">
                <ul>
                    <li>The system assumes the availability and reliability of third-party traffic data sources and mapping services.</li>
                    <li>The system depends on users having access to mobile devices with internet connectivity.</li>
                    <li>The system assumes users will provide accurate location information for optimal route recommendations.</li>
                </ul>
            </div>

            <h2 className="project-title">Appendices</h2>
            <div className="project-text">
                <p>Traffic Level Status : Low (Green) , Moderate (Yellow), High (Red)</p>
            </div>
        </article>
    );

    const technicalContent = (
        <article>
            <h2 className="project-title">Wireframing</h2>
            <div className="project-img">
                <img src={eight} alt="Traffic GO wireframe 1" className="project-image"/>
                <img src={nine} alt="Traffic GO wireframe 2" className="project-image"/>
                <img src={ten} alt="Traffic GO wireframe 3" className="project-image"/>
            </div>
            <h2 className="project-title">Basic Low Level Design</h2>
            <div className="project-img">
                <img src={two} alt="Traffic GO design 2" className="project-image"/>
                <img src={three} alt="Traffic GO design 3" className="project-image"/>
                <img src={four} alt="Traffic GO design 4" className="project-image"/>
            </div>
             <h2 className="project-title">Basic Level Design with Functionality</h2>
            <div className="project-img">
                <img src={five} alt="Traffic GO functionality 1" className="project-image"/>
                <img src={six} alt="Traffic GO functionality 2" className="project-image"/>
                <img src={seven} alt="Traffic GO functionality 3" className="project-image"/>
            </div>
               <h2 className="project-title">Final High Level Design  with Functionality</h2>
            <div className="project-img">
                <img src={eleven} alt="Traffic GO functionality 1" className="project-image"/>
                <img src={twelve} alt="Traffic GO functionality 2" className="project-image"/>
                <img src={thirteen} alt="Traffic GO functionality 3" className="project-image"/>
                <img src={fourteen} alt="Traffic GO functionality 4" className="project-image"/>
                <img src={siete} alt="Traffic GO functionality 6" className="project-image"/>
                <img src={nueve} alt="Traffic GO functionality 8" className="project-image"/>
                <img src={diez} alt="Traffic GO functionality 9" className="project-image"/>
                <img src={once} alt="Traffic GO functionality 10" className="project-image"/>
            
            </div>
        </article>
    );

    const requirementsContent = (
        <article>
        <h2 className="project-title">Unit and Integration Testing</h2>
        <p className="project-text">This project uses <strong>Jest</strong> and <strong>React Testing Library</strong> for unit and integration testing.</p>
           <div className="project-text">
                <pre style={{
                    backgroundColor: '#f5f5f5',
                    padding: '1.5rem',
                    borderRadius: '8px',
                    overflow: 'auto',
                    fontSize: '0.9rem',
                    lineHeight: '1.5',
                    border: '1px solid #ddd'
                }}>
                    <code>
                        {` PASS  __tests__/integration/trafficAPI.test.js
  Traffic API Integration Tests
    Google Maps Distance Matrix API
      √ should fetch traffic data from Google Maps API (5 ms)
      √ should handle API errors gracefully (1 ms)                                
      √ should handle ZERO_RESULTS status                                         
      √ should handle REQUEST_DENIED status (1 ms)                                
    Traffic Classification Logic                                                  
      √ should calculate traffic ratio correctly                                  
      √ should classify traffic levels correctly                                  
      √ should handle edge case where traffic is faster than normal               
    Multiple Region Traffic Fetching                                              
      √ should fetch traffic data for all four regions (1 ms)                     
      √ should handle mixed success and failure responses                         
    Real-time Traffic Updates                                                     
      √ should use departure_time for real-time traffic (1 ms)                    
      √ should include traffic_model parameter                                    
      √ should include driving mode for traffic data                              
    Error Handling and Recovery                                                   
      √ should retry on network timeout (1 ms)                                    
      √ should handle malformed API responses                                     
      √ should handle missing duration_in_traffic field                           
                                                                                  
Test Suites: 2 failed, 2 passed, 4 total
Tests:       20 passed, 20 total
Snapshots:   0 total
Time:        2.426 s
Ran all test suites.`}</code>
                </pre>
                <p>Nearly all tests passed successfully, with the exception of 2 failed test suites.
                </p>
            </div>
             <h2 className="project-title">Issues and Feedback</h2>
                        <div className="project-text">

             <p>The following are some issues encountered during development and feedback received:</p>
             <ul>
                <li>Recommended Route fetching inconsistencies, sometimes routes do not update promptly based on real-time traffic changes.</li>
                <li>Component tests failing due to React Native's internal files using Flow/TypeScript syntax that Babel can't parse properly.</li>
                <li>Ran into difficulties with handling search functionality and ensuring UI responsiveness and accuracy.</li>
             </ul>
             </div>
               <h2 className="project-title">User Testing Results</h2>
                        <div className="project-text">

             <p>The following are some scenarios encountered during development and feedback received:</p>
             <ul>
                <li>Users found the interface intuitive and easy to navigate, with clear options for route selection and traffic updates.</li>
                <li>Some users suggested adding more customization options for route preferences, such as avoiding tolls or highways.</li>
                <li>Feedback indicated a desire for more detailed traffic reporting and alerts.</li>
             </ul>
             </div>
                 <h2 className="project-title">Requirement Traceability</h2>
                        <div className="project-text">

             <ul>
                <li>Real-time traffic data retrieval and display - Implemented using Google Maps API integration.</li>
                <li>Route optimization based on traffic conditions - Developed algorithms to analyze traffic data and suggest optimal routes.</li>
                <li>Saved routes management for future retrieval - Created a database schema to store user-saved routes securely.</li>
                <li>Incident reporting features for users to report traffic issues - Designed a user-friendly interface for reporting and tracking incidents.</li>
             </ul>
             </div>
              <h2 className="project-title">Glass-box Testing</h2>
                        <div className="project-text">

             <p>Glass-box testing was performed on the following functionalities:</p>
             <ul>
                <li>Input validation for user location and destination entries.</li>
                <li>Response handling for various traffic data scenarios (e.g., heavy traffic, accidents).</li>
                <li>Performance testing for route calculation and display times.</li>
             </ul>
             </div>
        </article>
    );
    
    return (
         <div className="project-app">
            <div className="project-container">
                <h1 className="project-main-title">Traffic GO - Transportation Analytics</h1>
                <p style={{fontSize: '1.2rem', color: '#666', marginTop: '1rem'}}>Traffic Monitoring App Meant to Cut Down Pesky Delays</p> 
                                <p style={{fontSize: '1.2rem', color: '#666', marginTop: '1rem'}}>GitHub: <a href="https://github.com/KWATER2352/Traffic-GO.git" target="_blank" rel="noopener noreferrer">Traffic GO Repository</a></p> 

            </div>
            
            <Container className="project-content">
                <TabsExample 
                    overviewContent={overviewContent}
                    technicalContent={technicalContent}
                    requirementsContent={requirementsContent}
                />
            </Container>
        </div>
    )   
}