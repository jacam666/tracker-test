import React from 'react';

const Home = () => {
    return (
        <div>
            <header>
                {/*<button className='login-button'>Log in</button>*/}
                <h1 className='heading'>Fitness Tracker</h1>
                {/*<button className='signup-button'>Sign up</button>*/}            
            </header>
                
            <div className="card-container">
                <div className="card-arms">
                    <h1> Arms </h1>
                    <img className='arms-image' src="/images/armsImage.jpeg" alt='arms' />
                </div>
                <div className="card-chest">
                    <h1> Chest </h1>
                    <img className='chest-image' src="/images/chestImage.jpeg" alt='chest' />
                </div>
                <div className="card-legs">
                    <h1> Legs </h1>
                    <img className='legs-image' src="/images/legsImage.jpeg" alt='legs' />
                </div>
                <div className="card-back">
                    <h1> Back </h1>
                    <img className='back-image' src="/images/backImage.jpeg" alt='back' />
                </div>
                <div className="card-shoulders">
                    <h1 className='shoulders-heading'> Shoulders </h1>
                    <img className='shoulders-image' src="/images/shouldersImage.jpeg" alt='shoulders' />
                </div>
            </div>
        </div>
    );
}

export default Home;

