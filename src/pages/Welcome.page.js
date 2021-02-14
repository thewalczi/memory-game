import React from 'react';
import StartPanelComponent from '../components/StartPanel.component';

const WelcomePage = (props) => {

    const gameName = 'Memory Game';

    return (
        <div>
            <StartPanelComponent gameName={gameName}/>
        </div>
    );
}

export default WelcomePage;