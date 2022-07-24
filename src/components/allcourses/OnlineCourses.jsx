import * as React from 'react';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {online} from '../../dummydata'

export default function OnlineCourses() {
  return (
    <div className='container mx-auto flex flex-col mb-5'>
      <h2 className='mx-auto text-2xl font-bold mb-2'>
        Mentoring LDK Al-Ukhuwah
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
          {online.slice(0, 6).map((item, index) => {
            return (
              <>
                <div className='flex justify-between rounded-md border-4'>
                  <Box className='flex flex-col'>
                    <CardContent className='flex flex-col justify-between'>
                      <div id='typograpgy'>
                        <Typography component="div" variant="h5">
                            Tasqif
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div"></Typography>
                        <Typography>
                          Mac Miller
                        </Typography>
                      </div>
                      <div id='btn-whatsapp'>
                        <button className="bg-green-500 text-white mt-4 py-2 px-4 text-xs md:text-sm cursor-pointer hover:scale-105 rounded-md">
                          Masuk Grup WhatsApp {" "}
                          {/* <i className="fa fa-long-arrow-alt-right"></i> */}
                        </button>
                      </div>
                    </CardContent>
                  </Box>
                  <CardMedia
                    component="img"
                    sx={{ width: 158 }}
                    image="/images/courses/tasqif.JPG"
                    alt="Live from space album cover"
                  />
                </div>
              </>
            )
          })}
      </div>
    </div>
  );
}