import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { StyledAbout, classes } from './styles';
import { aboutPageSteps } from './constants';

export function About() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <StyledAbout >
      <h1>BookLooker is the one site you need to enjoy books!</h1>
      <p>
          Choose from millions of best selling ebooks and textbooks. 
          Discover new releases, best sellers, and personalized recommendations. We aspire to be a go to resource for librarians, educators, parents, book creators, and publishers who seek to create collections in which all can see themselves and each other reflected in the picture books they read.<br/>
          What is our mission? To inform the diverse books movement by providing data and translating research so that it is accessible and useful.
      </p>
      <section className={classes.contentSection}>
        <Box sx={{ maxWidth: 400, pt: 10 }}>
          <Stepper activeStep={activeStep} orientation="vertical">
            {aboutPageSteps.map((step, index) => (
              <Step key={step.label}>
                  <StepLabel
                    optional={ index === 2 ? (<Typography variant="caption">Last step</Typography>) : null}>
                    {step.label}
                  </StepLabel>
                  <StepContent>
                  <Typography>{step.description}</Typography>
                  <Box sx={{ mb: 2 }}>
                      <div>
                        <Button
                            variant="contained"
                            onClick={handleNext}
                            sx={{ mt: 2, mr: 2 }}
                        >
                            {index === aboutPageSteps.length - 1 ? 'Finish' : 'Continue'}
                        </Button>
                        <Button
                            disabled={index === 0}
                            onClick={handleBack}
                            sx={{ mt: 1, mr: 1 }}
                        >
                            Back
                        </Button>
                      </div>
                  </Box>
                  </StepContent>
              </Step>
            ))}
          </Stepper>
          {activeStep === aboutPageSteps.length && (
            <Paper square elevation={0} sx={{ p: 3 }}>
              <Typography>All aboutPageSteps completed - you&apos;re finished</Typography>
              <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                  Reset
              </Button>
            </Paper>
          )}
        </Box>
        <img 
            className={classes.img}
            src='https://www.wikihow.com/extensions/wikihow/homepage/images/books2.webp'
            alt='a lot of books'>
        </img>
      </section>
    </StyledAbout>
  );
};