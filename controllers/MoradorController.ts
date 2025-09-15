import { db } from "@/lib/firebase";
import { Morador } from "@/models/Morador";
import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc } from "firebase/firestore";
import { Role } from "@/lib/decorators/Role";

const collectionRef = collection(db, "moradores");

export class MoradorController {
  @Role("sindico")
  static async add(context: { user: any; data: Morador }) {
    const { data } = context;
    const docRef = await addDoc(collectionRef, data);
    return { id: docRef.id, ...data };
  }

  @Role("sindico")
  static async list(context: { user: any }) {
    const snapshot = await getDocs(collectionRef);
    return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() } as Morador));
  }

  @Role("morador")
  static async update(context: { user: any; id: string; data: Partial<Morador> }) {
    const { id, data } = context;
    const docRef = doc(db, "moradores", id);
    await updateDoc(docRef, data);
  }

  @Role("admin")
  static async remove(context: { user: any; id: string }) {
    const { id } = context;
    const docRef = doc(db, "moradores", id);
    await deleteDoc(docRef);
  }
}
