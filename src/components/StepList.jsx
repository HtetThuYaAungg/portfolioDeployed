import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { green, orange } from "@mui/material/colors";

const StepList = ({ activeStep, level1, level2, level3, level4 }) => {
  const steps = [level1, level2, level3, level4];

  const outerTheme = createTheme({
    palette: {
      primary: {
        main: green[900],
      },
    },
  });

  return (
    <div>
      <Box sx={{ width: "100%" }}>
        <ThemeProvider theme={outerTheme}>
          <Stepper nonLinear activeStep={activeStep} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </ThemeProvider>
      </Box>
    </div>
  );
};

export default StepList;
