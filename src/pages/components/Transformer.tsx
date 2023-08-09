import { api } from "~/utils/api";
import UploadField from "./UploadField";
import useStore from "~/utils/store/globalStore";
import { downloadPNGs, pdfToPNGs } from "~/utils/transform";

export default function Transformer() {
  const { uploadedImage, setUploadedImage, clearUploadedImage } = useStore();
  const transformQuery = api.file.transform.useQuery({ text: "from tRPC" });

  function handleUpload() {}

  function transform() {
    pdfToPNGs(uploadedImage as File).then((res) => {
      downloadPNGs(res);
    });
  }

  return (
    <div className="flex h-screen w-full flex-col items-center">
      <div className="my-20 w-full px-8 md:w-1/2 md:px-0">
        <UploadField onUpload={handleUpload} transform={transform} />
      </div>
    </div>
  );
}
