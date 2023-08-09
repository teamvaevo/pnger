import { api } from "~/utils/api";
import UploadField from "./UploadField";
import useStore from "~/utils/store/globalStore";

export default function Transformer() {
  const { uploadedImage, setUploadedImage, clearUploadedImage } = useStore();
  const transformQuery = api.file.transform.useQuery({ text: "from tRPC" });

  function handleUpload() {
    console.log("uploading");
    // uploadedImage;
    // transformQuery.refetch;
  }

  function transform() {
    console.log("transforming");
    // uploadedImage;
    // transformQuery.refetch;
    console.log(uploadedImage);
  }

  return (
    <div className="flex h-screen w-full flex-col items-center">
      <div className="w-1/2">
        <UploadField onUpload={handleUpload} transform={transform} />
      </div>
    </div>
  );
}
