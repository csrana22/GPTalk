import { SignIn } from '@clerk/clerk-react';

const SignInPage = ()=>{
    return (
        <div className='h-[100%] flex items-center justify-center'>
            <SignIn signUpUrl='/sign-up'/>
        </div>
    )
}

export default SignInPage;