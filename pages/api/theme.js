// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import  { NextApiRequest, NextApiResponse } from 'next'



export default function(req, res){
  if (req.method === 'POST') {

  }
  if (req.method =='GET'){
    res.status(200).json({ primary: primaryColour, secondary: secondaryColour, accent: accentColour
     })
  }
  
  else {
    // Handle any other HTTP method
  }
}
