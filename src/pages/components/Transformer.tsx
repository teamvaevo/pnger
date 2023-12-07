import { api } from "~/utils/api";
import UploadField from "./UploadField";
import useStore from "~/utils/store/globalStore";
import { downloadPNGs, pdfToPNGs } from "~/utils/transform";
import Script from "next/script";

export default function Transformer() {
  const { uploadedImage, setUploadedImage, clearUploadedImage } = useStore();
  const transformQuery = api.file.transform.useQuery({ text: "from tRPC" });

  function handleUpload() {}

  function transform(factor: number) {
    pdfToPNGs(uploadedImage as File, factor).then((res) => {
      downloadPNGs(res);
    });
  }

  return (
    <div className="my-20">
      <UploadField onUpload={handleUpload} transform={transform} />
      <Script
        src="https://mozilla.github.io/pdf.js/build/pdf.mjs"
        type="module"
      ></Script>
    </div>
  );
}
