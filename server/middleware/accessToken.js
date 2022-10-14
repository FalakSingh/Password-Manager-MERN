//middleware to save accessToken on client's browser


const createEncryptionToken = async (req, res) => {
  const user = req.user;
  if (user.secretKey> 1) {
    return next();
  }

  try {
    
  } catch (error) {
    
  }
}

