import { db } from "@/lib/firebase";
import * as Morador from "@/models/Morador";
import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc } from "firebase/firestore";
import { Role } from "@/lib/decorators/Role";

const collectionRef = collection(db, "moradores");

export class MoradorController {
  @Role(["admin", "sindico"])
  static async add(context: { user: { role: string } }, morador: Morador.Morador) {
    const docRef = await addDoc(collectionRef, morador);
    return { id: docRef.id, ...morador };
  }

  @Role(["admin", "sindico", "morador"])
  static async list(context: { user: { role: string } }) {
    const snapshot = await getDocs(collectionRef);
    return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() } as Morador.Morador));
  }

  @Role(["admin", "sindico"])
  static async update(context: { user: { role: string } }, id: string, data: Partial<Morador.Morador>) {
    const docRef = doc(db, "moradores", id);
    await updateDoc(docRef, data);
  }

  @Role(["admin"])
  static async remove(context: { user: { role: string } }, id: string) {
    const docRef = doc(db, "moradores", id);
    await deleteDoc(docRef);
  }
}
