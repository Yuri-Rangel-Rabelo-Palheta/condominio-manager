import { db } from "@/lib/firebase";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { User } from "@/models/User";

export async function createUser(user: User) {
  await setDoc(doc(db, "users", user.id), user);
}

export async function getUser(uid: string): Promise<User | null> {
  const docSnap = await getDoc(doc(db, "users", uid));
  return docSnap.exists() ? (docSnap.data() as User) : null;
}
