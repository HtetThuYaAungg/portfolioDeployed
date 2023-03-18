import { Button, Card, CardActions, CardContent, CardMedia, Skeleton, Typography } from "@mui/material";
import { green } from "@mui/material/colors";
import { Stack } from "@mui/system";
import React from "react";

const InvisibleCard = () => {
  return (
    <div className=" mb-4">
      <Card  >
        
        
        <CardContent >
          <Typography gutterBottom variant="h5" component="div">
            <Stack spacing={1}>
            <Skeleton variant="rectangular" width="auto"   height={80} />
              <Skeleton variant="rounded" width="auto"  height={40} />
            </Stack>
          </Typography>
          <CardActions>
            <Button size="small" sx={{color:"gray"}}>Demo</Button>
            <Button size="small" sx={{color:"gray"}}>SourceCode</Button>
          </CardActions>
        </CardContent>
      </Card>
    </div>
  );
};

export default InvisibleCard;
