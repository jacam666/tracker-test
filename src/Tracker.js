import React, { useState } from 'react';
import Home from './Navbar/Home';
import Nutrition from './Navbar/Nutrition';
import Workouts from './Navbar/Workouts';
import SignUpForm from './sign_up';

const Tracker = () => {
  const [activeSection, setActiveSection] = useState('home'); // Set the default active section to 'home'

    const handleNavClick = (section) => {
    setActiveSection(section);
    }

  // Render the corresponding navbar section based on the active section state
    let sectionComponent;
    switch (activeSection) {
    case 'home':
        sectionComponent = <Home />;
        break;
    case 'signup':
        sectionComponent = <SignUpForm />;
        break;
    case 'nutrition':
        sectionComponent = <Nutrition />;
        break;
    case 'workouts':
        sectionComponent = <Workouts />;
        break;
    default:
        sectionComponent = <Home />;
}
    return (
    <div>
        <nav>
            <ul className='navbar'>
            <li id='home' onClick={() => handleNavClick('home')}>
                <h1>Home</h1>
            </li>
            <li id='workouts' onClick={() => handleNavClick('workouts')}>
                <h1>Workouts</h1>
            </li>
            <li id='nutrition' onClick={() => handleNavClick('nutrition')}>
                <h1>Nutrition</h1>
            </li>
            <li id='signup' onClick={() => handleNavClick('signup')}>
                <h1>Sign up</h1>
            </li>
            </ul>
        </nav>

        {sectionComponent}
        </div>
    );
}

export default Tracker;




