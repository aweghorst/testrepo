let db;

const request = indexed.open('find_bike', 1);

request.onupgradeneeded = function(event) {
    const db = event.target.result;
    db.createobjectStore('new_bike', { autoIncrement: true });
}

request.onsuccess = function(event) {
    db.event.target.result;
    if (navigator.online) {
        // uploadBike();
    }
}

request.onerror = function(event) {
    console.log(event.target.errorCode);
};

function saveBike(bike) {
    const transaction = db.transaction(['bike'], 'readwrite');
    const bikeObjectStore = transaction.objectStore('bike');
    bikeObjectStore.add(bike);
}

function uploadBike() {
    const transaction = db.transaction(['bike'], 'readwrite');
    const bikeObjectStore = transaction.objectStore('bike');
    const getAll = bikeObjectStore.getAll();

    getAll.onsuccess = function() {
        if (getAll.result.length > 0) {
            // fetch post api


            const transaction = db.transaction(['bike'], 'readwrite');
            const bikeObjectStore = transaction.objectStore('bike');
            bikeObjectStore.clear();

            alert('All bikes have been saved');
        }

    }
}

window.addEventListener('online', uploadBike);