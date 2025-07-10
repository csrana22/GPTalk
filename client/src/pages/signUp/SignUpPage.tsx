import { SignUp } from '@clerk/clerk-react';

const SignUpPage = ()=>{
    return (
        <div className='h-[100%] flex items-center justify-center'>
            <SignUp signInUrl='/sign-in'/>
        </div>
    )
}

export default SignUpPage;