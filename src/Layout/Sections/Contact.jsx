import { getDocs, collection } from "firebase/firestore"
import { useEffect } from "react"
import { db } from "../../config/firebase";

export default function Contact() {
    useEffect(() => {
        async function getData() {
            const querySnapshot = await getDocs(collection(db, "users"));
            querySnapshot.forEach((doc) => {
                console.log(doc.id, " => ", doc.data());
            });
        }

        getData();
    }, [])
    return (
        <div>
            <h1>Reading data from fire store (test)</h1>
        </div>
    )
}