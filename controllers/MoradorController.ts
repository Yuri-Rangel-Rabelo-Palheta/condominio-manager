import { db } from "@/lib/firebase";
import { Morador } from "@/models/Morador";
import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc } from "firebase/firestore";

const collectionRef = collection(db, "moradores");

export class MoradorController {
  static async add(morador: Morador) {
    const docRef = await addDoc(collectionRef, morador);
    return { id: docRef.id, ...morador };
  }

  static async list() {
    const snapshot = await getDocs(collectionRef);
    return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() } as Morador));
  }

  static async update(id: string, data: Partial<Morador>) {
    const docRef = doc(db, "moradores", id);
    await updateDoc(docRef, data);
  }

  static async remove(id: string) {
    const docRef = doc(db, "moradores", id);
    await deleteDoc(docRef);
  }
}
