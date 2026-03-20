//Auth Route
import { Router } from "express";
import { generateToken } from "../util/token-utils";
import { Auth } from "../interface/auth-interface";
import { authMiddleware } from "../middleware/auth-middleware";
const bcrypt = require('bcrypt')

const router = Router();

const users:any = []

router.post('/register', async (req, res) => {
  
    const { email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = {
        id: users.length + 1,
        email,
        password: hashedPassword
    }

    console.log("The Hashed Paswweod vs the Actual ");
    console.log(password, hashedPassword);
    

    users.push(user)

  res.json({ message: 'User registered' })
})


router.post('/login', async (req, res) => {
  const { email, password } = req.body

  //check the user
  const user = users.find(u => u.email === email);

  if (!user) {
    return res.status(400).json({ message: 'User not found' })
  }

  //validate password
  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    return res.status(400).json({ message: 'Invalid credentials' });
  }

  const token = generateToken(user);

  res.json({ token })
});

router.get('/profile', authMiddleware, (req : Auth, res) => {
  res.json({
    message: 'Protected data',
    user: req.user
  })
});


export default router