import React from "react";
import Card from "../components/Card";

function DisplayCards() {
  return (
    <div className="flex gap-2 justify-center items-center bg-orange-600 h-[100vh] flex-wrap">
      <Card />

      <Card />

      <Card
        title="CSS"
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUH-oIAvcVSDEN54K4XFbmUAynW9xva-dQ0g&s"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, modi fuga? Dicta, distinctio nam quae laboriosam cumque repudiandae non officiis, cupiditate officia ratione totam maiores nemo ea dolorum aliquam reprehenderit."
      />

      <Card
        title="HTML"
        img="https://www.cnet.com/a/img/resize/b9b09bd80b3129a6a5da79d9bd17487b977c9677/hub/2014/10/27/40194e6e-2544-419e-a340-f7c17b2e83c5/html5-wow-image-w3c.jpg?auto=webp&width=768"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, modi fuga? Dicta, distinctio nam quae laboriosam cumque repudiandae non officiis, cupiditate officia ratione totam maiores nemo ea dolorum aliquam reprehenderit."
      />
    </div>
  );
}

export default DisplayCards;
