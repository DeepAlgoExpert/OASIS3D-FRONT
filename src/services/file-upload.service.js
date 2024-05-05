import https from "../https-common";
import measureAPI from "../https-measure-common";

class FileUploadService {
  base64ToBlob(base64String, contentType) {
    const byteCharacters = btoa(base64String);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    return new Blob([byteArray], { type: contentType });
  }

  tryon(modelType, model, garmentType, garment, onUploadProgress) {

    return https.post("/", {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      model: model,
      garment: garment,
      modelType: modelType,
      garmentType: garmentType,
      onUploadProgress,
    });
  }

  measure(model, height, onUploadProgress) {
    let formData = new FormData();

    formData.append("model", model);
    formData.append("height", height);
    console.log('model-height:', formData);
    console.log('model::', model)
    return measureAPI.post("/measure", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      onUploadProgress,
    });
  }

  getFiles() {
    return https.get("/");
  }
}

export default new FileUploadService();