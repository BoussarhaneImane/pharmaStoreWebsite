import React from "react";
import img1 from "./person1.jpg"
import img2 from "./person2.jpg"
import img3 from "./person3.jpg"
import img4 from "./person4.jpg"

const Category = () => {
  const comments = [
    {
      id: 1,
      comment: "Très bon service, je recommande !",
      image: img1,
    },
    {
      id: 2,
      comment: "Livraison rapide et produits de qualité.",
      image: img2,
    },
    {
      id: 3,
      comment: "Excellent choix de produits, je suis satisfait.",
      image: img3,
    },
    {
      id: 4,
      comment: "Service client très réactif, merci beaucoup !",
      image:img4,
    },
  ];

  return (
    <div className="">
      <div className="container">
        <h1 className="text-3xl font-semibold text-gray-800 mb-4 text-center p-2">Quoi client dit a notre service</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 m-8">
          {comments.map((comment) => (
            <div  data-aos="fade-down" key={comment.id} className="bg-emerald-500 p-2 rounded-lg">
              {comment.image && (
                <img
                  src={comment.image}
                  alt="Comment Image"
                  className="w-14 h-14 object-cover rounded-lg mb-4"
                />
              )}
              <p className="text-gray-900 mb-2">{comment.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
