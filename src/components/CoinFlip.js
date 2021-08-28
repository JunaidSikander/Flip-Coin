import React, {useState} from 'react'
import {choice} from "../helpers";
import Coin from "./Coin";

const CoinFlip = ({side}) => {
    const [state, setState] = useState({currCoin: null, nFlips: 0, nHeads: 0, nTails: 0});

    const flipCoin = () => {
        let face = choice(side);
        setState((prevState) => {
            return {
                ...prevState,
                currCoin: face,
                nFlips: prevState.nFlips + 1,
                nHeads: prevState.nHeads + (face === 'Head' ? 1 : 0),
                nTails: prevState.nTails + (face === 'Tail' ? 1 : 0)
            }
        });
    };

    return (
        <div className='container'>
            <h2>Let Flip a Coin!</h2>
            <Coin face={state.currCoin}/>
            <div>
                <span>
                     Out of {state.nFlips} flips, there have been {state.nHeads} heads and {state.nTails} tails
                 </span>
            </div>
            <div>
                <button onClick={flipCoin}> Flip Me</button>
            </div>
        </div>
    )
};

export default CoinFlip;

CoinFlip.defaultProps = {
    side: ['Head', 'Tail']
};
