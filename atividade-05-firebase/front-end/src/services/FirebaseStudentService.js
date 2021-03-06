import { collection, getDocs, addDoc, getDoc, doc, updateDoc, deleteDoc} from "firebase/firestore"

export default class FirebaseStudentService {
    static unscribe = null

    static list = (firestore, callback) => {
        getDocs(collection(firestore, 'students'))
            .then(querySnapshot => {
                let students = []
                querySnapshot.forEach(doc => {
                    const { name, course, ira } = doc.data()
                    students.push({_id: doc.id, name, course, ira})
                })
                callback(students)
            })
            .catch(error => console.log(error))
    }

    static create = (firestore, callback, data) => {
        addDoc(collection(firestore, 'students'), data)
            .then(doc => callback())
            .catch(error => console.log(error))
    }

    static retrieve_promisse = (firestore, callback, _id) => {
        const docRef = doc(firestore, "students", _id);
        getDoc(docRef)
        .then(docSnap => docSnap.exists() && callback(docSnap.data()))
        .catch(error => console.log(error))
    }

    static update = (firestore, callback, _id, body) => {
        const docRef = doc(firestore, "students", _id);
        updateDoc(docRef, body)
        .then(() => callback())
        .catch(error => console.log(error))
    }

    static delete = (firestore, callback, _id) => {
        const docRef = doc(firestore, "students", _id);
        deleteDoc(docRef)
        .then(() => callback())
        .catch(error => console.log(error))
    }
}