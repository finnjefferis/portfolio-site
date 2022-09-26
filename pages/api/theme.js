// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import  { NextApiRequest, NextApiResponse } from 'next'



export default function(req, res){
  let primaryColour = req.body.primary
  let secondaryColour = req.body.secondary
  let accentColour = req.body.accent
  if (req.method === 'POST') {
    res.status(200).json({ primary: primaryColour, secondary: secondaryColour, accent: accentColour, hi: req.body
    })
  }
  if (req.method =='GET'){
    res.status(200).json({ primary: primaryColour, secondary: secondaryColour, accent: accentColour
     })
  }
  
  else {
    // Handle any other HTTP method
  }
}
