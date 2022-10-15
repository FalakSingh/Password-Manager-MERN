//middleware to save accessToken on client's browser


const createEncryptionToken = async (req, res) => {
  const user = req.user;
  if (user.secretKey) {
    return next();
  }

  try {
    
  } catch (error) {
    
  }
}

