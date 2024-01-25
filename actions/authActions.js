'use server'
import { authOptions } from "@/app/api/auth/[...nextauth]/route" 
import { getServerSession } from "next-auth"
import User from "@/models/userModels" 
import { redirect } from "next/navigation"
import bcrypt from 'bcrypt'
import { Jwt } from "jsonwebtoken"
import { generateToken, varifyToken } from "@/back_end_utils/token"
import sendEmail from "@/back_end_utils/sendEmail"

const BASE_URL = process.env.NEXTAUTH_URL;

export async function updatUser({ name, image }) {
    
  
    try {
        const session = await getServerSession(authOptions)
        console.log(session);
        if (!session) throw new Error('UnAthorization')
        const user = await User.findByIdAndUpdate(session?.user?._id, {
            name, image
        },{new:true} ).select('-password')
        
       if(!user) throw new Error('Email does not exist')
        return { msg: 'Update profile successfully' }
    }
    catch (error) {
        console.log(error);
        redirect(`/error?error=${error.message}`)
        
    }
    
}
export async function SignUpCredentials(data) {
      try{
        const user = await User.findOne({email:data.email})
        if (user) throw new Error('Email already exist|')
        if (data.password) {
            data.password = await bcrypt.hash(data.password, 12)
        }
          const token = generateToken({ user: data });
          console.log({token});
        await sendEmail({
            to:data.email,
            url:`${BASE_URL}/verify?token=${token}`,
            text:'Verify Email'
        })
console.log({data});
        return { msg: 'SignUp success : Check your Email to complete registration' }
    }
    catch (error) {
        console.log(error);
        redirect(`/error?error=${error.message}`)
        
    }
    
}
//verify
export async function verifyCredentials(token) {
    try{
        const { user } = varifyToken(token)
        console.log({ user });
        const userExist = await User.findOne({ email: user.email })
        if (userExist) return { msg: 'Verify success' };
        const newUser = new User(user);
        console.log(newUser);
        await newUser.save();
        return { msg: 'Verify success', };

     
    }
  catch (error) {
      console.log(error);
        redirect(`/error?error=${error.message}`)
        
      
  }
  
}



// export async function changePasswordCredentials({old_pass,new_pass}) {
    
//     try {
//         const session = await getServerSession(authOpions);
//         if (!session) throw new Error('Unauthorize!');
//         if (session?.user?.provider !=='credentials') { 
//             throw new Error(`This account is signed in with ${session?.user?.provider}. You can't use this function`)
//         }
    

//         const user = await User.findById(session?.user?._id);
//         if (!user) throw new Error("User does not exist");
//         const compare = await bcrypt.compare(old_pass, user.password);
//         if (!compare) throw new Error('Old password does not match');
//         const newPass = await bcrypt.hash(new_pass, 12);

//         await User.findByIdAndUpdate(user._id, {password: newPass});


        
       
//         return { msg: 'Password Changed success' };
     
//     }
//   catch (error) {
//       console.log(error);
//       redirect(`/error?error=${error.message}`)
      
//   }
  
// }


// forget password
// export async function forgetPasswordCredentials({email}) {
    
//     try {
     
       
//         const user = await User.findOne({email});
//         if (!user) throw new Error("Email does not exist");

//         if (user?.provider !=='credentials') { 
//             throw new Error(`This account is signed in with ${user?.provider}. You can't use this function`)
//         }
//         const token=generateToken({userId: user._id})
        
//         await sendEmail({
//             to: email,
//             url: `${BASE_URL}/reset_password?token=${token}`,
//             text:'Reset Password'
//         })
//         return { msg: ' success| check your email to reset password' };
     
//     }
//   catch (error) {
//       console.log(error);
//       redirect(`/error?error=${error.message}`)
      
//   }
  
// }

// reset_passwod
// export async function resetPasswordCredentials({token,password}) {
    
//     try {
//         const {userId} = varifyToken(token);
//         const newPass = await bcrypt.hash(password, 12);
//         await User.findByIdAndUpdate(userId,{ password: newPass });

       
//         return { msg: ' success| your password has been reset' };
     
//     }
//   catch (error) {
//       console.log(error);
//       redirect(`/error?error=${error.message}`)
      
//   }
  
// }