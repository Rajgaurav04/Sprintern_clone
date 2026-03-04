const DB_NAME = "videoDB";
const STORE_NAME = "videos";
const VERSION = 1;

export function openDB() {
  return new Promise((resolve, reject) => {

    const request = indexedDB.open(DB_NAME, VERSION);

    request.onupgradeneeded = (event) => {
      const db = event.target.result;

      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, {
          keyPath: "id",
          autoIncrement: true
        });
      }
    };

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject("DB error");

  });
}


export async function addVideo(videoData) {

  const db = await openDB();

  const tx = db.transaction(STORE_NAME, "readwrite");

  const store = tx.objectStore(STORE_NAME);

  store.add(videoData);

}


export async function getVideos() {

  const db = await openDB();

  return new Promise((resolve, reject) => {

    const tx = db.transaction(STORE_NAME, "readonly");

    const store = tx.objectStore(STORE_NAME);

    const request = store.getAll();

    request.onsuccess = () => resolve(request.result);
    request.onerror = reject;

  });

}

export async function deleteVideo(id) {

  const db = await openDB();

  return new Promise((resolve, reject) => {

    const tx = db.transaction("videos", "readwrite");

    const store = tx.objectStore("videos");

    const request = store.delete(id);

    request.onsuccess = () => resolve("Video deleted");

    request.onerror = () => reject("Delete failed");

  });

}