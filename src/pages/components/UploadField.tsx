import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import useStore from "~/utils/store/globalStore";
import { useTranslation } from "react-i18next";

interface IProps {
  className?: string;
  onUpload: () => void;
  transform: (factor: number) => void;
}

function UploadField(props: IProps) {
  const { uploadedImage, setUploadedImage, clearUploadedImage } = useStore();

  const onDrop = useCallback((acceptedFiles: any[]) => {
    props.onUpload();
    setFileName(acceptedFiles[0].path);
    setUploaded(true);
    setUploadedImage(acceptedFiles[0]);
  }, []);

  const [uploaded, setUploaded] = useState(uploadedImage !== null);
  const [filename, setFileName] = useState(uploadedImage?.name ?? "");
  const [resolutionFactor, setResolutionFactor] = useState(3);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  const { t } = useTranslation();

  const imgPreview: React.ReactNode = (
    <div className="flex w-full flex-col items-center justify-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-10 w-10"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
        />
      </svg>
      <p className="text-md">{filename}</p>
    </div>
  );

  function clearUpload() {
    setFileName("");
    setUploaded(false);
    clearUploadedImage();
  }

  let activeParagraph = <p>{t("LABEL_DROP_FILE")}</p>;

  let inactiveParagraph = <p>{t("LABEL_DRAGNDROP")}</p>;
  let nonAccepted = isDragActive ? activeParagraph : inactiveParagraph;
  // flex h-40 w-1/2 items-center justify-center rounded-lg border-2 border-dashed border-black bg-purple-200
  function handleSliderChange(event: React.ChangeEvent<HTMLInputElement>) {
    setResolutionFactor(parseInt(event.target.value));
  }

  return (
    <div className="flex flex-col space-y-10">
      <div
        {...getRootProps()}
        className={
          "w-full cursor-pointer rounded-lg border-4 border-black bg-purple-200 px-4 py-20 text-center text-black" +
          (uploaded ? " border-solid" : " border-dashed ") +
          props.className
        }
      >
        <input {...getInputProps()} multiple={false} />
        <div className="text-xl">{uploaded ? imgPreview : nonAccepted}</div>
      </div>
      <div className="flex w-full flex-col items-center space-y-2">
        <p>
          {t("LABEL_SCALING_FACTOR")}: {resolutionFactor}
        </p>
        <input
          type="range"
          className="range range-sm"
          max={6}
          min={1}
          value={resolutionFactor}
          onChange={handleSliderChange}
        />
        <p className="text-sm italic">{t("HOME_SCALING")}</p>
      </div>
      <div className="flex w-full justify-center space-x-6">
        <button
          className="btn btn-error"
          onClick={clearUpload}
          disabled={!uploaded}
        >
          {t("BUTTON_CLEAR")}
        </button>
        <button
          className="btn btn-primary"
          onClick={() => props.transform(resolutionFactor)}
          disabled={!uploaded}
        >
          {t("BUTTON_TRANSFORM")}
        </button>
      </div>
    </div>
  );
}

export default UploadField;
