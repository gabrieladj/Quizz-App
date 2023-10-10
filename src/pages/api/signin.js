import { withSessionRoute } from "@/lib/session";
import { hashPassword, verifyPassword } from "@/lib/password";
import { validate_user_pass } from "@/lib/users"

export default withSessionRoute(async (req, res) => {
  if (req.method === 'POST') {
    const { username, password } = req.body;
    const user = await validate_user_pass(username, password);
    
    //const usernameValidated = await getUsername(userId);
    if (user) {
        const verify = await verifyPassword(password, user.password)
        if (verify) {
            req.session.user = { 
                username: user.username,
                userId: user.id
            };
            await req.session.save();
            return res.status(200).json({ success: true, message: 'Logged in successfully' });
        }
        return res.status(500).json({ success: false, message: 'Check your password' });
    }
    else {
      return res.status(500).json({ success: false, message: 'Invalid username' });
    }
  }
  else {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Redirect to the home page
  //return res.status(200).redirect("/list-quiz")

  // await prisma.UserStudent.create({data: {username, password: hashedPassword}})
  // req.session.user = {username, isLoggedIn: true}
  // await req.session.save()

  // // Perform your authentication logic here
  // if (username === "example" && password === "password") {
  //   // Set user data in the session
  //   req.session.set("user", { username: "example" });
  //   await req.session.save();

  //   // Redirect to the home page
  //   return res.status(200).redirect("/list-quiz")
  // } else {
  //   alert("Invalid credentials");
  // }
  
})