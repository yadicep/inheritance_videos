# **VIDEO SUGGESTIONS WITH INHERITANCE**

The page displays a video suggestion per category (Music, Movie, Series) using a collapsible menu implemented with Bootstrap. Videos are dynamically loaded into `iframe` tags through JavaScript, utilizing an IIFE to encapsulate the logic. A base class (`Multimedia`) manages video URLs, while a child class (`Reproductor`) assigns IDs and sets personalized start times. Instances of `Reproductor` control each category, ensuring videos display correctly when interacting with the menu. The site combines HTML structure, CSS styles, and modular logic to deliver an interactive experience.

## **Technologies Used**
- **HTML5**
- **CSS3**
- **JavaScript**
- **Bootstrap**


## **Features**
- **YouTube Integration**: Utilizes URLs to embed videos in `iframe` tags.
- **Module Pattern**: Implemented with IIFE for encapsulating and protecting logic.
- **DOM Manipulation**: Uses methods like `setAttribute` to dynamically modify HTML elements.
- **Classes and Inheritance**:
  - `Multimedia` class for video logic.
  - `Reproductor` class for specific functionalities (URLs and start times).
- **Encapsulation with Closures**: Protects class attributes.
- **Custom Video Start Time**: Configures specific start times for video URLs.


## **Screenshots**
<p align="center">
  <img src="assets/img/capture.png" alt="Preview of the main page" width="400px">
</p>


## **Installation**
1. Clone the repository:
   ```bash
   git clone https://github.com/yadicep/inheritance_videos.git
