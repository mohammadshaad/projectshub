import React from "react";
import Tittle from "./Tittle";

function PostMenu() {
  return (
    <div className="relative h-36 lg:h-48 border-t border-gray-200 bg-gray-50">
        <Tittle 
        title="Blog"
        desc="A collection of my thoughts and writings."
        />
    </div>
  );
}

export default PostMenu;
