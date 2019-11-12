import React from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron } from 'reactstrap';
import OnboardCard from './OnboardCard';
// import './onboardBox.css'

const OnboardBox = () => {
    return (
        <div className="hero-box">
            <Jumbotron className="hero">
              <OnboardCard />
            </Jumbotron>
        </div>
    )
}

export default OnboardBox;
