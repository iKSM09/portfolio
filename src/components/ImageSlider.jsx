import { useEffect, useState } from "react";
import Image from "./Image.astro";

const ImageSlider = ({ name, images, url }) => {
  const [imgNum, setImgNum] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setImgNum((num) => (num < images.length - 1 ? num + 1 : 0));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="aspect-square">
      <a className="relative group" href={url} target="_blank">
        <img
          className="absolute inset-0 object-cover rounded-lg w-full h-full group-hover:opacity-30"
          src={images[imgNum]}
          alt={`${name} preview image.`}
        />
        <div className="relative w-full h-full flex justify-center items-center">
          <div className="text-center transition-all transform translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
            <p className="font-bold text-lg py-2">{name}</p>
            <button className="px-6 py-2 text-sm font-bold text-gray-100 bg-slate-700/70 border-2 rounded-full">
              Visit
            </button>
          </div>
        </div>
      </a>
    </div>
  );
};

export default ImageSlider;
