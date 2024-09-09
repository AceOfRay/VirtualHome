'use client'
import styles from "./page.module.css"
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import { useRouter } from "next/navigation";
import { auth } from "./scripts/firebase/firebase"
import { useEffect } from "react";


export default function Home() {
  const provider = new GoogleAuthProvider();
    const router = useRouter();

    const handleSignIn = (e : React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        signInWithPopup(auth, provider)
            .then((result) => {
                if (result.user) {
                    router.push("/homes")
                }
            }).catch((error) => {
                console.error(error)
            })
    };

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          router.push("/homes")
        }
      });

      return () => unsubscribe();
    }, [router])

    return (
        <main>
            <div className={styles.googlesignincontainer}>
                <h2>Login</h2>
                <button className={styles.googlesigninbutton} type="button" onClick={(e) => {handleSignIn(e)}}>SignInWithGoogle</button>
            </div>
        </main>
    )
}
