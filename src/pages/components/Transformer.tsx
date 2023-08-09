import UploadField from "./UploadField";

export default function Transformer() {
  function handleUpload() {
    console.log("uploading");
  }

  return (
    <div className="flex h-screen w-full flex-col items-center">
      <UploadField onUpload={handleUpload} />
    </div>
  );
}
