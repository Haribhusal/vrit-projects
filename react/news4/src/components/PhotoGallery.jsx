import { useEffect, useState } from "react";

const PhotoGallery = () => {
  const [showPhotosCount, setShowPhotosCount] = useState(5);
  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      let response = await fetch(
        `https://jsonplaceholder.typicode.com/photos?page=${page}`
      );
      console.log(response);
      let data = await response.json();
      setPhotos(data);
      setLoading(false);
    };
    fetchData();
  }, [page]);

  return (
    <div>
      {loading && <div>Loading....</div>}
      {/* We are showing {photos.length} photos */}
      <div className="grid grid-cols-5">
        {photos.slice(0, showPhotosCount).map((photo) => (
          <div key={photo.id}>
            <img src={photo.thumbnailUrl} alt="" />
            <div>{photo.title}</div>
          </div>
        ))}
      </div>
      <button
        onClick={() => setShowPhotosCount(showPhotosCount + 1)}
        className="btn bg-blue-600 text-white rounded-md p-5"
      >
        Get More Photos
      </button>
    </div>
  );
};

export default PhotoGallery;
