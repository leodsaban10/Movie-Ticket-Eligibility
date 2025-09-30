class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null
    }
}

class DoublyLinkedList {
    constructor() {
    this.head = null; // first song
    this.tail = null; // last song
    this.current = null; // current song
    }

    getCurrent() { 
        return this.current
    }

    moveNext() {
        if (this.current.next === null) {
            alert("You've reached the end of the playlist!");
        } else {
            this.current = this.current.next;
        }
    }

    movePrev() {
        if (this.current.prev === null) {
            alert("You're already at the beginning of the playlist!");
        } else {
            this.current = this.current.prev;
        }
    }

    addSong(songTitle) {
        const newNode = new Node(songTitle);
        
        if (this.head === null) {
            // First song
            this.head = newNode;
            this.tail = newNode;
            this.current = newNode;
        } else {
            // Add to end of list
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
    }
}

// Create playlist and add songs
const playlist = new DoublyLinkedList();
playlist.addSong("Bohemian Rhapsody");
playlist.addSong("Imagine");
playlist.addSong("Hotel California");
playlist.addSong("Stairway to Heaven");
playlist.addSong("Sweet Child of Mine");
playlist.addSong("21 Guns");
playlist.addSong("Numb");
playlist.addSong("Rude");

console.log("Current song:", playlist.getCurrent().value);

// Player state
let isPlaying = false;

// Function to update the display
function updateDisplay() {
    const nowPlaying = document.getElementById("now-playing");
    const playButton = document.getElementById("play");
    const currentSong = playlist.getCurrent().value;
    
    if (isPlaying) {
        nowPlaying.textContent = `Playing: ${currentSong}`;
        playButton.textContent = "Pause";
    } else {
        nowPlaying.textContent = `Paused: ${currentSong}`;
        playButton.textContent = "Play";
    }
}

// Wait for page to load
document.addEventListener('DOMContentLoaded', function() {
    // Get button references
    const previousBtn = document.getElementById("previous");
    const playBtn = document.getElementById("play");
    const nextBtn = document.getElementById("next");
    
    // Initial display
    updateDisplay();
    
    // Add event listeners
    previousBtn.addEventListener('click', function() {
        playlist.movePrev();
        updateDisplay();
    });
    
    playBtn.addEventListener('click', function() {
        isPlaying = !isPlaying;  // Toggle play/pause
        updateDisplay();
    });
    
    nextBtn.addEventListener('click', function() {
        playlist.moveNext();
        updateDisplay();
    });
});