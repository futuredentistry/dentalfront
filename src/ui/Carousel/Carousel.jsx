import React, { useState } from 'react'
import SwipeableViews from 'react-swipeable-views'
import Typography from '@material-ui/core/Typography'
import MobileStepper from '@material-ui/core/MobileStepper'

import Human from './images/human.svg'
import Life from './images/life.svg'
import Smile from './images/smile.svg'
import Cross from './images/cross.svg'

const Carousel = () => {
    const [activeStep, setStep] = useState(0)
    return (
        <>
            <SwipeableViews
                index={activeStep}
                onChangeIndex={step => setStep(step)}
            >
                <div>
                    <Typography variant="h5">Getting to know you</Typography>
                    <Typography variant="body2"><b>2-3 minutes</b></Typography>
                    <br />
                    <Typography variant="body2"><img src={Human} alt="Logo" /></Typography>
                    <br />
                    <Typography variant="body2">A little about who you are and your current level of healthcare</Typography>
                    <br />
                </div>
                <div>
                    <Typography variant="h5">Your lifestyle</Typography>
                    <Typography variant="body2"><b>1 minute</b></Typography>
                    <br />
                    <Typography variant="body2"><img src={Life} alt="Logo" /></Typography>
                    <br />
                    <Typography variant="body2">The food and drinks you consume can have a big impact on your teeth</Typography>
                    <br />
                </div>
                <div>
                    <Typography variant="h5">Your teeth</Typography>
                    <Typography variant="body2"><b>1 minute</b></Typography>
                    <br />
                    <Typography variant="body2"><img src={Smile} alt="Logo" /></Typography>
                    <br />
                    <Typography variant="body2">Your oral health is really what we’re here for so let’s get to know your smile</Typography>
                    <br />
                </div>
                <div>
                    <Typography variant="h5">Your health</Typography>
                    <Typography variant="body2"><b>2-3 minutes</b></Typography>
                    <br />
                    <Typography variant="body2"><img src={Cross} alt="Logo" /></Typography>
                    <br />
                    <Typography variant="body2">Understanding any medical conditions you have helps us to develop your personalised dental plan</Typography>
                    <br />
                </div>
            </SwipeableViews>
            <MobileStepper
                style={{ width: '100%', justifyContent: 'center' }}
                variant="dots"
                steps={4}
                position="static"
                activeStep={activeStep}
                nextButton={null}
                backButton={null}
            />
        </>
    )
}

export default Carousel
