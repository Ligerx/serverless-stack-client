import React, { useState, useEffect } from "react";
import { Image } from "react-bootstrap";

// Couldn't get this code working... onload or onerror wouldn't fire at all, not sure why.
export default function ImagePreview({ attachment }) {
    const [image, setImage] = useState(null);

    useEffect(() => {
        console.log('inside useEffect');
        const newImage = new Image();
        fileOrUrlToImage(newImage, attachment, (image) => {
            console.log('inside useEffect callback');
            setImage(image);
        });

        // return () => {
        //     // Avoid potential memory leak
        //     // https://stackoverflow.com/a/57781164
        //     if (attachment instanceof File) {
        //         URL.revokeObjectURL(image.src);
        //     }
        // };
    }, [attachment]);

    if (attachment == null || image == null) return null;

    return (
        <Image src={image.src} />
    );
}

async function fileOrUrlToImage(image, fileOrUrl, callback) {
    // const image = new Image();
    image.onload = () => {
        console.log('inside image.onload');
        callback(image);
    };
    image.onerror = () => {
        console.log('inside image.onerror');
        callback(null);
    };

    if (fileOrUrl instanceof File) {
        console.log('file is instanceof File', fileOrUrl instanceof File);
        console.log('file is instanceof Blob', fileOrUrl instanceof Blob);
        image.src = URL.createObjectURL(fileOrUrl);
    } else if (typeof fileOrUrl === "string") {
        console.log('file is type string');
        image.src = fileOrUrl;
        console.log(image.src);
    } else {
        console.log('invalid file type');
        callback(null);
    }
}
