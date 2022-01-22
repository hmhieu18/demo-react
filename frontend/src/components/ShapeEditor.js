import {
  ShapeEditor,
  ImageLayer,
  DrawLayer,
  wrapShape,
} from "react-shape-editor";

import { useState } from "react";
function arrayReplace(arr, index, item) {
  return [
    ...arr.slice(0, index),
    ...(Array.isArray(item) ? item : [item]),
    ...arr.slice(index + 1),
  ];
}

const RectShape = wrapShape(({ width, height }) => (
  <rect width={width} height={height} fill="rgba(0,0,255,0.5)" />
));

let idIterator = 1;

const Editor = () => {
  const [items, setItems] = useState([]);
  let [file, setFile] = useState(null);

  const [{ vectorHeight, vectorWidth }, setVectorDimensions] = useState({
    vectorHeight: 0,
    vectorWidth: 0,
  });

  const uploadIconStyle = {
    display: "inline",
    width: 500,
    height: 500,
  };

  const fileChangedHandler = (event) => {
    let file = event.target.files[0];
    let reader = new FileReader();
    console.log(file);
    reader.onload = function (e) {
      setFile(e.target.result);
    };
    reader.readAsDataURL(event.target.files[0]);
  };

  return (
    <div>
      <input
        className="btn btn-secondary"
        id="fileInput"
        type="file"
        accept="image/*"
        onChange={fileChangedHandler}
      />
      {/* <img
          src={file}
          alt={''}
          width="400"
          height="400"
          text-align="left"
          style={{ display: 'block' }}
        /> */}
      <ShapeEditor vectorWidth={vectorWidth} vectorHeight={vectorHeight}>
        <ImageLayer
          // Photo by Sarah Gualtieri on Unsplash
          src={file}
          alt={""}
          style={uploadIconStyle}
          responsive
          onLoad={({ naturalWidth, naturalHeight }) => {
            setVectorDimensions({
              vectorWidth: naturalWidth,
              vectorHeight: naturalHeight,
            });
          }}
        />
        <DrawLayer
          onAddShape={({ x, y, width, height }) => {
            setItems((currentItems) => [
              ...currentItems,
              { id: `id${idIterator}`, x, y, width, height },
            ]);
            idIterator += 1;
          }}
        />
        {console.log(items)}
        {items.map((item, index) => {
          const { id, height, width, x, y } = item;
          return (
            <RectShape
              key={id}
              shapeId={id}
              height={height}
              width={width}
              x={x}
              y={y}
              onChange={(newRect) => {
                setItems((currentItems) =>
                  arrayReplace(currentItems, index, {
                    ...item,
                    ...newRect,
                  })
                );
              }}
              onDelete={() => {
                setItems((currentItems) =>
                  arrayReplace(currentItems, index, [])
                );
              }}
            />
          );
        })}
      </ShapeEditor>
    </div>
  );
};

export default Editor