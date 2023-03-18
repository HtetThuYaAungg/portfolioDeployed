import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Skeleton,
  Stack,
  Typography,
} from "@mui/material";

import axios from "axios";
import Swal from "sweetalert2";
import InvisibleCard from "../components/InvisibleCard";

const Project = () => {
  const [data, setData] = useState([]);
  // console.log(data)
  const getProjectData = async () => {
    const res = await axios.get("http://localhost:8005/getdata", {
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res.data.status === 401 || !res.data) {
      console.log("error");
      Swal.fire({
        toast: true,
        icon: "error",
        title: "Ooops!",
        position: "top",
        showConfirmButton: false,
        timer: 1500,

        text: error.text,
      });
    } else {
      setData(res.data.getProject);
    }
  };

  useEffect(() => {
    getProjectData();
  }, []);

  return (
    <div className="Project">
      <div className="py-2 md:flex md:flex-wrap md:justify-center gap-5 lg:flex lg:flex-wrap  lg:justify-center px-1">
        {data?.length > 0
          ? data.map((data) => {
              return (
                <Card
                  key={data._id}
                  sx={{ width: 345, maxHeight: 250, marginBottom: 2 }}
                >
                  <CardMedia
                    sx={{ height: 140 }}
                    image={data.imgpath}  
                    title="green iguana"
                  />

                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {data.title}
                    </Typography>
                    <CardActions>
                      <Button size="small" href={data.demo}>
                        Demo
                      </Button>
                      <Button size="small" href={data.code}>
                        SourceCode
                      </Button>
                    </CardActions>
                  </CardContent>
                </Card>
              );
            })
          : 
          <div className="py-2 md:flex md:flex-wrap md:justify-center gap-5 lg:flex lg:flex-wrap  lg:justify-center px-1">

            <InvisibleCard/>
            <InvisibleCard />
            <InvisibleCard />
            <InvisibleCard />
            <InvisibleCard />
            <InvisibleCard />
   </div>
        }
      </div>
    </div>
  );
};

export default Project;
