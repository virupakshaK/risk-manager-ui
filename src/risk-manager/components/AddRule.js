import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Card } from '@mui/material';
import RuleConditions from './RuleConditions';
import { RuleInfo } from './backoffice/RuleInfo';
const steps = ['Define Rule', 'Conditions', 'Actions'];


export const AddRule = () => {

    const [activeStep, setActiveStep] = useState(0);
    const [completed, setCompleted] = useState({});

    const totalSteps = () => {
        return steps.length;
      };

      const completedSteps = () => {
        return Object.keys(completed).length;
      };

      const isLastStep = () => {
        return activeStep === totalSteps() - 1;
      };

      const allStepsCompleted = () => {
        return completedSteps() === totalSteps();
      };

      const handleNext = () => {
        const newActiveStep =
          isLastStep() && !allStepsCompleted()
            ? // It's the last step, but not all steps have been completed,
              // find the first step that has been completed
              steps.findIndex((step, i) => !(i in completed))
            : activeStep + 1;
        setActiveStep(newActiveStep);
      };

      const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
      };

      const handleStep = (step) => () => {
        setActiveStep(step);
      };

      const handleComplete = () => {
        setCompleted({
          ...completed,
          [activeStep]: true,
        });
        handleNext();
      };


      const handleReset = () => {
        setActiveStep(0);
        setCompleted({});
      };
    

  return (
    <Box sx={{ width: '100%' }}>
        <Card sx={{ m: 1,
                       width: '95%',
                       p: '15px',
                       maxHeight: '65vh'}}>
    <Stepper nonLinear activeStep={activeStep} sx={{width: '100%'}}>
      {steps.map((label, index) => (
        <Step key={label} completed={completed[index]}>
          <StepButton color="inherit" onClick={handleStep(index)}>
            {label}
          </StepButton>
        </Step>
      ))}
    </Stepper>
     </Card> 
     <Card sx={{    m: 1,
                    width: '95%',
                    maxHeight: '65vh',
                    pr: '15px',
                    pl: '15px'
                     }}> 
    <div>
      {allStepsCompleted() ? (
        <React.Fragment>
           
          <Typography sx={{ mt: 2, mb: 1 }} >
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2, pb: '10px' }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleReset} variant='outlined'>Reset</Button>
          </Box>
         
        </React.Fragment>
      ) : (
        <React.Fragment>
          
     
          <Typography sx={{ mt: 1, mb: 1, py: 1 }}>

          
            {activeStep === 1 ? <RuleConditions /> : <RuleInfo />}
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 1, pb:'20px' }}>
            <Button
              
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
              variant='outlined'
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleNext} sx={{ mr: 1 }} variant='outlined'>
              Next
            </Button>
            {activeStep !== steps.length &&
              (completed[activeStep] ? (
                <Typography variant="caption" sx={{ display: 'inline-block' }}>
                  Step {activeStep + 1} already completed
                </Typography>
              ) : (
                <Button onClick={handleComplete} variant='outlined'>
                  {completedSteps() === totalSteps() - 1
                    ? 'Finish'
                    : 'Complete Step'}
                </Button>
              ))}
          </Box>
          
        </React.Fragment>
      )}
    </div>
    </Card>
  </Box>
  );
}
