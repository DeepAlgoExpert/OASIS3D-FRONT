import React, { Component } from "react";

const FilePreview = ({ previewImage }) => {
  return (
    <div>
        {previewImage && (
          <div>
            <img className="preview" src={previewImage} alt="" />
          </div>
        )}

      </div>
  );
}

export default FilePreview;