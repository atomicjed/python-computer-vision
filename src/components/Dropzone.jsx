import {useDropzone} from "react-dropzone";
import {useCallback} from "react";

export default function CustomDropzone() {
  const onDrop = useCallback(acceptedFiles => {
    // Do something with the files
    console.log(acceptedFiles);
  }, [])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop});

  return (
    <div {...getRootProps()} className={'bg-white cursor-pointer transition duration-300 ease-in-out hover:bg-gray-200 p-12 text-black rounded-2xl border border-dashed border-black lg:max-w-[80%] lg:min-w-[80%] h-[250px] flex flex-col justify-center items-center text-center '}>
      <input {...getInputProps()} />
      {
        isDragActive ?
          <p>Drop the files here ...</p> :
          <p>Drag 'n' drop your work here, or click to select files</p>
      }
    </div>
  );
}