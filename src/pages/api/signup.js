import { withSessionRoute } from "@/lib/session";
import { hashPassword } from "@/lib/password";
import { userExists, createUser, getUsername } from "@/lib/users"

export default withSessionRoute(async (req, res) => {
  if (req.method === 'POST') {
    const { username, password } = req.body;

    // send back 

    if (await userExists(username)) {
      return res.status(500).json({ success: false, message: 'Username already exists' });

    }
    if (password.length < 5) {
      return res.status(500).json({ success: false, message: 'Password must be at least 5 characters long' });
    }
    if (username.length < 2) {
      return res.status(500).json({ success: false, message: 'Username must be at least 2 characters long' });
    }

    const hashedPassword = await hashPassword(password);
    const userId = await createUser(username, hashedPassword);
    const usernameValidated = await getUsername(userId);

    req.session.user = { 
      username: usernameValidated,
      userId: userId
    };

    await req.session.save();

    return res.status(200).json({ success: true, message: 'Created account successfully' });
  }
  else {
    return res.status(405).json({ error: 'Method not allowed' });
  }  
})