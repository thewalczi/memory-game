import React from 'react';
import styled from 'styled-components/macro';
import StartPanelComponent from '../components/StartPanel.component';
import { wrapper } from '../styles/mixins.styles';

const WelcomePage = (props) => {

    const gameName = 'Memory Game';
    
    const StartContainer = styled.div`
        ${wrapper};
    `

    return (
        <StartContainer>
            <StartPanelComponent gameName={gameName}/>
        </StartContainer>
    );
}

export default WelcomePage;