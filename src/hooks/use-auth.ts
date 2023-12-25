import router from "next/router";
import { toast } from "sonner";

export const useAuth = () => {
    const signOut = async () => {
        try{
            const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/users/logout`,
            {
                method:"POST",
                credentials:'include',
                headers:{
                    'Content-Type': 'application/json',
                },
            })

            if(!res.ok) throw new Error();

            toast.success("Signed out succesfully")

            router.push("/sign-in")

        }
        catch(err){
            toast.error("Couldnt sign out, please try again")
        }
    }
    return {signOut}
}