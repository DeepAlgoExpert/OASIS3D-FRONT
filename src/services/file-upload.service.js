import http from "../http-common";

class FileUploadService {
  upload(modelType, model, garmentType, garment, onUploadProgress) {
    let formData = new FormData();

    formData.append("model", model);
    formData.append("garment", garment);

    const params = new URLSearchParams();

    // Check if the selected model is "Upper"
    if (modelType == 'Half') {
        params.append('model_category', 0);
    } else {
        params.append('model_category', 1);
    }

    // Check if the selected model is "Upper"
    if (garmentType == 'Upper') {
        params.append('garment_category', 0);
    } else if (garmentType=='Lower') {
        params.append('garment_category', 1);
    } else {
        params.append('garment_category', 2);
    }

    return http.post("/", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      params: params, // Include params in the request
      onUploadProgress,
    });
  }

  getFiles() {
    return http.get("/");
  }
}

export default new FileUploadService();