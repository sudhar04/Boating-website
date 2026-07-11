import React, { useState, useRef } from "react";
import img1 from "../assets/galary1.jpg";
import img2 from "../assets/gallarey3.jpg";
import img3 from "../assets/gallary2.jpg";
import img4 from "../assets/gallry boat.jpeg";
import img5 from "../assets/image3.jpeg";
import { 
  Camera, 
  ZoomIn, 
  ZoomOut, 
  Download, 
  Maximize2, 
  X 
} from "lucide-react";


const categories = ["All", "Boats", "Rides", "Destinations", "Crew"];

const images = [
  {
    id: 1,
    src: img1,
    title: "Nemo Boat",
    category: "Boats"
  },
  {
    id: 2,
    src: img2,
    title: "Sunset Ride",
    category: "Rides"
  },
  {
    id: 3,
    src: img3,
    title: "Jet Ski Adventure",
    category: "Rides"
  },
  {
    id: 4,
    src: img4,
    title: "Mangrove Forest",
    category: "Destinations"
  },
  {
    id: 5,
    src: img5,
    title: "Happy Customers",
    category: "Crew"
  }
];

export default function GallerySectionClone() {
  const [active, setActive] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);
  const [hovered, setHovered] = useState(null);
  const [zoom, setZoom] = useState(1);
const imgRef = useRef(null);


  const filteredImages =
    active === "All"
      ? images
      : images.filter((img) => img.category === active);

  const zoomIn = () => setZoom((prev) => prev + 0.2);
const zoomOut = () => setZoom((prev) => (prev > 0.4 ? prev - 0.2 : prev));

const downloadImage = () => {
  const link = document.createElement("a");
  link.href = selectedImage.src;
  link.download = selectedImage.title;
  link.click();
};

const openFullscreen = () => {
  if (imgRef.current.requestFullscreen) {
    imgRef.current.requestFullscreen();
  }
};


  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <div style={styles.badge}>
  <Camera size={16} style={{ marginRight: 6 }} />
  Photo Gallery
</div>

        <h2 style={styles.title}>
          Capture the <span style={styles.gradient}>Memories</span>
        </h2>
        <p style={styles.subtitle}>
          Take a glimpse of the adventures that await you
        </p>

        <div style={styles.filters}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              style={{
                ...styles.filterBtn,
                ...(active === cat ? styles.activeBtn : {})
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        <div style={styles.grid}>
          {filteredImages.map((img) => (
            <div
              key={img.id}
              style={{
                ...styles.card,
                ...(hovered === img.id ? styles.cardHover : {})
              }}
              onMouseEnter={() => setHovered(img.id)}
              onMouseLeave={() => setHovered(null)}
              onClick={() => setSelectedImage(img)}
            >
              <img
                src={img.src}
                alt={img.title}
                style={{
                  ...styles.image,
                  ...(hovered === img.id ? styles.imageHover : {})
                }}
              />
              <div
                style={{
                  ...styles.overlay,
                  opacity: hovered === img.id ? 1 : 0
                }}
              >
                
                <p style={styles.caption}>{img.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>


      {selectedImage && (
  <div style={styles.lightbox}>
    
    {/* TOP RIGHT ICONS */}
<div style={styles.topIcons}>
  <ZoomIn size={20} onClick={zoomIn} style={styles.iconBtn} />
  <ZoomOut size={20} onClick={zoomOut} style={styles.iconBtn} />
  <Download size={20} onClick={downloadImage} style={styles.iconBtn} />
  <Maximize2 size={20} onClick={openFullscreen} style={styles.iconBtn} />
  <X
    size={22}
    onClick={() => {
      setSelectedImage(null);
      setZoom(1);
    }}
    style={styles.iconBtn}
  />
</div>


    {/* IMAGE FULL SCREEN */}
    <img
      ref={imgRef}
      src={selectedImage.src}
      alt={selectedImage.title}
      style={{
        ...styles.lightboxImg,
        transform: `scale(${zoom})`
      }}
    />

    <h3 style={styles.lightboxTitle}>{selectedImage.title}</h3>
  </div>
  
)}

  


    </section>
  );
}

const styles = {
  section: {
    padding: "100px 20px",
    background: "#f8fafc",
    fontFamily: "Poppins, sans-serif"
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    textAlign: "center"
  },
  badge: {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "6px",
  background: "#e0ecff",
  color: "#2563eb",
  padding: "10px 20px",
  borderRadius: "999px",
  fontSize: 14,
  fontWeight: 600,
  marginBottom: 25,
  boxShadow: "0 4px 14px rgba(37,99,235,0.2)"
},

  controls: {
  display: "flex",
  justifyContent: "center",
  gap: "15px",
  marginTop: "15px",
  flexWrap: "wrap"
},

  title: {
    fontSize: "clamp(28px,5vw,44px)",
    fontWeight: 700,
    marginBottom: 10,
    color: "#111827"
  },
  gradient: {
    background: "linear-gradient(to right, #f97316, #2563eb)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent"
  },
  subtitle: {
    color: "#64748b",
    marginBottom: 40
  },
  filters: {
    display: "flex",
    justifyContent: "center",
    gap: 12,
    flexWrap: "wrap",
    marginBottom: 50
  },
  filterBtn: {
    padding: "10px 20px",
    borderRadius: 25,
    border: "none",
    background: "#e5e7eb",
    cursor: "pointer",
    fontWeight: 500,
    transition: "all 0.3s ease"
  },
  activeBtn: {
    background: "#f97316",
    color: "#fff",
    boxShadow: "0 8px 20px rgba(249,115,22,0.4)"
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: 25
  },
  card: {
    position: "relative",
    borderRadius: 20,
    overflow: "hidden",
    cursor: "pointer",
    transition: "transform 0.4s ease"
  },
  cardHover: {
    transform: "translateY(-8px)"
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "transform 0.5s ease"
  },
  imageHover: {
    transform: "scale(1.08)"
  },
  overlay: {
    position: "absolute",
    inset: 0,
    background: "rgba(0,0,0,0.45)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    transition: "opacity 0.4s ease"
  },
  plus: {
    width: 60,
    height: 60,
    borderRadius: "50%",
    background: "#f97316",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 28,
    marginBottom: 10
  },
  caption: {
    fontSize: 16,
    fontWeight: 600
  },
 lightbox: {
  position: "fixed",
  inset: 0,
  background: "rgba(0,0,0,0.95)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 1000
},

  close: {
    position: "absolute",
    top: 15,
    right: 20,
    fontSize: 28,
    color: "#fff",
    cursor: "pointer"
  },
 
lightboxImg: {
  maxWidth: "90%",
  maxHeight: "80vh",
  objectFit: "contain",
  transition: "transform 0.3s ease"
},

  
lightboxTitle: {
  color: "#fff",
  marginTop: 20,
  fontWeight: 600
},
  topControls: {
  position: "absolute",
  top: 20,
  right: 20,
  display: "flex",
  gap: 18,
  alignItems: "center"
},

controlIcon: {
  color: "#ffffff",
  cursor: "pointer",
  transition: "all 0.2s ease"
},
topIcons: {
  position: "absolute",
  top: 20,
  right: 20,
  display: "flex",
  gap: 18,
  alignItems: "center"
},
iconBtn: {
  color: "#ffffff",
  cursor: "pointer",
  opacity: 0.85,
  transition: "0.3s ease"
},

};
