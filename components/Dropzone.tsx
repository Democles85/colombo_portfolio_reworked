import { Badge, Box, Image, useColorModeValue } from '@chakra-ui/react';
import React, { useCallback, useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { useFormContext } from 'react-hook-form';

const FileInput = (props: any) => {
  const { name, label = name } = props;
  const { register, unregister, setValue, watch } = useFormContext();
  const files = watch(name);

  const [file, setFile] = useState<any>([]);

  const onDrop = useCallback(
    (droppedFiles: any) => {
      setValue(name, droppedFiles, { shouldValidate: true });
      setFile(
        droppedFiles.map((file: any) =>
          Object.assign(file, { preview: URL.createObjectURL(file) })
        )
      );
    },
    [setValue, name]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    maxFiles: 1,
    onDrop,
    accept: props.accept,
  });

  useEffect(() => {
    register(name);
    return () => unregister(name);
  }, [register, unregister, name]);

  useEffect(
    () => () => {
      file.forEach((file: any) => URL.revokeObjectURL(file.preview));
    },
    [file]
  );

  return (
    <>
      <Box {...getRootProps()}>
        <input
          {...getInputProps()}
          className={
            'focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none'
          }
        />
        <Box
          className={
            'w-full border rounded-lg flex justify-center border-dashed border-gray-300 p-2' +
            (isDragActive ? 'bg-gray-400' : 'bg-gray-800')
          }
          borderColor={useColorModeValue('gray.700', 'whiteAlpha.500')}
          _hover={{
            cursor: 'pointer',
            borderColor: '#FFA500',
          }}
        >
          <Box>
            {isDragActive ? (
              <p className={'my-2'}>Drop the file here ...</p>
            ) : (
              <p className={'my-2'}>
                Drag 'n' drop the file here, or click to select file
              </p>
            )}
            {file.length > 0 && (
              <Box className="m-2">
                {file.map((file: any) => (
                  <Box
                    key={file.name}
                    display={'flex'}
                    flexDir={'column'}
                    alignItems={'center'}
                  >
                    <Box>
                      <Image
                        src={file.preview}
                        alt={''}
                        style={{
                          width: '100px',
                          height: '100%',
                          borderRadius: '5px',
                        }}
                      />
                    </Box>
                    <Box>
                      <span className="font-medium">{file.name}</span>{' '}
                      <Badge colorScheme={'green'}>
                        {(file.size / 1048576).toPrecision(3)} MB
                      </Badge>
                    </Box>
                  </Box>
                ))}
              </Box>
            )}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default FileInput;
