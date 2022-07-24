import * as React from 'react';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import {online} from '../../dummydata'

export default function OnlineCourses() {
  return (
    <div className='container mx-auto flex flex-col mb-5'>
      <h2 className='mx-auto text-2xl font-bold mb-2'>
        Mentoring LDK Al-Ukhuwah
      </h2>
      <div className='gap-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
          {online.slice(0, 6).map((item, index) => {
            return (
              <>
                <div className='flex justify-between rounded-md hover:scale-105 cursor-pointer border-4'>
                  <Box className='flex flex-col'>
                    <CardContent className='flex flex-col justify-between border'>
                      <div id='typograpgy'>
                        <h5 className='text-black text-2xl font-bold'>
                            Tasqif
                        </h5>
                        <span component="span" className='text-xs text-slate-500 italic'>
                          Setiap Akhir Pekan
                        </span>
                      </div>
                      <div id='btn-whatsapp' className='mt-4'>
                        <button className="bg-green-500 text-white py-2 px-4 text-xs md:text-sm cursor-pointer hover:scale-105 rounded-md">
                          Join Grup WhatsApp {" "}
                          {/* <i className="fa fa-long-arrow-alt-right"></i> */}
                        </button>
                        <button className="bg-cyan-500 text-white mt-1 py-2 px-4 text-xs md:text-sm cursor-pointer hover:scale-105 rounded-md">
                          Lihat Detail {" "}
                          <i className="fa fa-long-arrow-alt-right"></i>
                        </button>
                      </div>
                    </CardContent>
                  </Box>
                  <CardMedia
                    component="img"
                    sx={{ width: 190 }}
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