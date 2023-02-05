// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
    if (req.method === 'POST') { 
        await handlePost()
    }
    if (req.method === 'PUT') { 
        hadnlePut()   
    }
    res.status(200).json({ name: 'John Doe' })
}

async function handlePost(req, res){
    if(req.body.name){
        res.status(200).json({ name: req.body.name })
    }
}

async function handlePut() {
    // do something
}
  
  
  